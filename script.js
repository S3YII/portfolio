// Loader
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// Typing effect
const text = "Frontend Developer | HTML • CSS • JavaScript";
let i = 0;
const typing = document.querySelector(".typing");

(function type() {
    typing.textContent = text.slice(0, i++);
    if (i <= text.length) setTimeout(type, 80);
})();

// Dark / Light Mode
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
    document.body.classList.toggle("light");
    toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
};

/* HAMBURGER MENU */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

/* THEME TOGGLE */
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});
