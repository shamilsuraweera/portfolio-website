// Theme toggle (remembers choice, defaults to system preference)
const root = document.documentElement;
const saved = localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
root.dataset.theme = saved || (prefersLight ? "light" : "dark");

document.getElementById("theme").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});

// Scroll-reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menu = document.getElementById("menu");
const siteNav = document.getElementById("site-nav");
const closeMenu = () => { siteNav.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); };
menu.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
siteNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Typing effect
const roles = ["ERP implementations", "Microsoft Dynamics 365", "Odoo customization", "Power Platform automation", "functional & technical consulting"];
const typed = document.getElementById("typed");
if (reduced) { typed.textContent = roles[0]; }
else {
  let r = 0, c = 0, del = false;
  (function tick() {
    const word = roles[r];
    typed.textContent = word.slice(0, c);
    let delay = del ? 35 : 70;
    if (!del && c === word.length) { del = true; delay = 1400; }
    else if (del && c === 0) { del = false; r = (r + 1) % roles.length; delay = 350; }
    else c += del ? -1 : 1;
    setTimeout(tick, delay);
  })();
}

// Scroll progress bar + active nav link
const bar = document.querySelector(".progress");
const links = [...document.querySelectorAll("#site-nav a[href^='#']")];
const secs = links.map((a) => document.querySelector(a.getAttribute("href")));
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  let cur = -1;
  secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * 0.4) cur = i; });
  links.forEach((a, i) => a.classList.toggle("active", i === cur));
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Staggered reveal index
document.querySelectorAll(".chips, .timeline, .grid").forEach((g) =>
  [...g.children].forEach((el, i) => el.style.setProperty("--i", i)));

// Count-up stats
document.querySelectorAll(".stats dt").forEach((dt) => {
  const m = dt.textContent.match(/^(\d+)(.*)$/);
  if (!m || reduced) return;
  const end = +m[1], suffix = m[2], t0 = performance.now() + 600;
  dt.textContent = "0" + suffix;
  (function step(t) {
    const p = Math.min(Math.max((t - t0) / 1400, 0), 1);
    dt.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(performance.now());
});

// Cursor glow + card tilt (pointer devices only)
if (!reduced && matchMedia("(hover: hover)").matches) {
  const glow = document.querySelector(".glow");
  addEventListener("pointermove", (e) => {
    glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; glow.classList.add("on");
  });
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const b = card.getBoundingClientRect();
      const x = (e.clientX - b.left) / b.width - 0.5, y = (e.clientY - b.top) / b.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-5px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}
