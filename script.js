const text = "Upcoming Web Developer | HTML | CSS | JavaScript";
let index = 0;

function typeEffect() {
    const typing = document.querySelector(".typing");
    typing.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(typeEffect, 100);
    }
}

typeEffect();
