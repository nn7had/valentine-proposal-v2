const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");

const phrases = [
  "Yox",
  "Əminsən?",
  "Dayan fikirləş biraz",
  "Doğurdan??",
  "Etmə beləəə",
  "Nolarrr düşünn",
  "Son qərarındı?",
  "Gözləəə",
  "Yaxşı yaxşı sən deyən olsun 😢"
];

let noCount = 0;

noBtn.addEventListener("click", () => {
  noCount++;
  const size = 16 + noCount * 20;
  yesBtn.style.fontSize = `${size}px`;
  noBtn.innerText = phrases[Math.min(noCount, phrases.length - 1)];
});

yesBtn.addEventListener("click", () => {
  container.innerHTML = `
    <div class="text-with-gif">
      <img src="/assets/ayiopucuk.gif" alt="Gif 2" class="overlay-gif" />
      <div class="son-message">Sənii çoxxx sevirəəmmm..❤️</div>
    </div>
  `;
});
