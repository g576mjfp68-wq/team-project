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
