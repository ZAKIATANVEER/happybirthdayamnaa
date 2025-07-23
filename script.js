let heartCount = 0;

function nextPage(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(`page${n}`).classList.add("active");
  if (n === 2) startHearts();
}

function startHearts() {
  const page = document.getElementById("page2");
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 90 + "%";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.onclick = () => {
      heart.remove();
      heartCount++;
      if (heartCount >= 10) {
        clearInterval(interval);
        nextPage(3);
      }
    };
    page.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 500);
}

function releaseBalloons() {
  document.getElementById("balloonSet").classList.add("rise");
  document.getElementById("msgText").style.display = "block";
  document.getElementById("flipCard").style.display = "block";
  dropConfetti();
}

function finalSurprise() {
  document.getElementById("balloonsFinal").classList.add("rise");
  document.getElementById("finalMsg").style.display = "block";
  document.getElementById("finalCard").style.display = "block";
  dropConfetti();
}

function dropConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}
