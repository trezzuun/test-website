const profilLogo = document.querySelectorAll(".profil-logo");
const roleAdd = document.querySelectorAll(".role-add");
const input = document.querySelectorAll(".message input");
const modal = document.querySelector(".modal-container");
const helpBtn = document.querySelector(".help-btn");
const feedbackInput = document.querySelector("#feedback-input");

const cursor = document.createElement("div");
cursor.className = "custom-cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = `${x}px`; // Set left position
    cursor.style.top = `${y}px`; // Set top position
});

/* Welcome */
document.body.addEventListener('click', function () {
  const clickAnywhere = document.querySelector('.click-anywhere');
  clickAnywhere.style.animation = 'fadeOut 5s ease-in-out forwards';

  setTimeout(function () {
      clickAnywhere.style.display = 'none';
  }, 2000);
});

const typewriterText = " Made with love / Trezzuun";
const typewriter = document.querySelector(".typewriter");

let index = 0;

function addLetter() {
    if (index < typewriterText.length) {
        typewriter.children[1].textContent += typewriterText.charAt(index);
        index++;
    } else {
        clearInterval(typing);
    }
}

const typing = setInterval(addLetter, 100);