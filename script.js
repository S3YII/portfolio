// Loader
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

/* TYPING EFFECT */
const typingText = "Frontend Developer • HTML • CSS • JavaScript";
let index = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  typingElement.textContent = typingText.slice(0, index++);
  if (index <= typingText.length) {
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

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

/* SCROLL ANIMATIONS */
const reveals = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(section => {
  section.classList.add("reveal");
  observer.observe(section);
});

/* GITHUB PROJECT FETCH */
const username = "YOUR_GITHUB_USERNAME";
const projectGrid = document.getElementById("projectGrid");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {
    data.slice(0, 6).forEach(repo => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <img src="https://opengraph.githubassets.com/1/${username}/${repo.name}">
        <div class="content">
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description provided."}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        </div>
      `;
      projectGrid.appendChild(card);
    });
  });
