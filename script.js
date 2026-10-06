// Menu category tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const cat = tab.dataset.cat;
    document.querySelectorAll(".card").forEach(card => {
      card.classList.toggle("hide", cat !== "all" && card.dataset.cat !== cat);
    });
  });
});

// Like buttons
document.querySelectorAll(".like").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = btn.textContent === "♡" ? "♥" : "♡";
  });
});

// Dark mode toggle
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Open now / Closed badge
const badge = document.getElementById("openBadge");
const now = new Date();
const day = now.getDay();                  // 0 = Sunday, 6 = Saturday
const hour = now.getHours() + now.getMinutes() / 60;
const weekend = day === 0 || day === 6;
const isOpen = weekend ? (hour >= 8 && hour < 17) : (hour >= 7 && hour < 18);
badge.textContent = isOpen ? "🟢 Open now" : "🔴 Closed right now";
badge.classList.add(isOpen ? "open" : "closed");

// Fade sections in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Contact form (demo only, nothing is actually sent)
document.getElementById("sendBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  document.getElementById("thanks").textContent =
    name ? `Thanks, ${name}! We'll get back to you soon ☕` : "Please enter your name first.";
});