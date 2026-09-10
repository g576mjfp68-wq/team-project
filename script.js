const countButton = document.getElementById("count-button");
const counterValue = document.getElementById("counter");

let count = 0;

countButton.addEventListener("click", () => {
  count += 1;
  counterValue.textContent = count;
});

const generateMessageButton = document.getElementById("generate-message-button");
const messageText = document.getElementById("message-text");

const messages = [
  "Git padeda komandai dirbti drauge be chaoso.",
  "Kiekvienas commitas priartina mus prie pabaigos.",
  "Komandinis darbas – tai geriausias būdas išmokti greičiau.",
  "Be Git nesutvarkysime net mažiausio pakeitimo.",
  "Komanda, kuri bendrauja, dažnai pasiekia daugiau.",
  "Šiandien – vienas žingsnis priekyje, rytoj – dar vienas!"
];

generateMessageButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageText.textContent = messages[randomIndex];
});

const showMottoButton = document.getElementById("show-motto-button");
const mottoText = document.getElementById("motto-text");

const mottos = [
  "Kuriame kartu, augame kartu.",
  "Maži commit'ai, dideli rezultatai.",
  "Idėjos tampa geresnės dirbant drauge."
];

showMottoButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * mottos.length);
  mottoText.textContent = mottos[randomIndex];
});

const clockValue = document.getElementById("clock-value");

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  clockValue.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);
