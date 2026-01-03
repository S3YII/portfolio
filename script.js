/* LOADING SCREEN */
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

/* TYPING EFFECT */
const text = "Upcoming Web Developer | HTML | CSS | JavaScript";
let index = 0;
const typing = document.querySelector(".typing");

function typeEffect() {
    typing.textContent = text.slice(0, index);
    index++;
    if (index <= text.length) {
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

/* DARK / LIGHT MODE */
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
});
