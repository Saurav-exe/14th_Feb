const params = new URLSearchParams(window.location.search);
const to = params.get("to");

const question = document.getElementById("question");

if (to && to.toLowerCase() !== "you") {
  question.textContent = `${to}, will you be my Valentine?`;
} else {
  question.textContent = "Will you be my Valentine?";
}

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

const container = document.querySelector(".buttons");

function moveNoButton() {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  result.textContent = "Yay! 💖 I knew it!";
});
