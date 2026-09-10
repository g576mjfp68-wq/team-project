const countButton = document.getElementById("count-button");
const counterValue = document.getElementById("counter");

let count = 0;

countButton.addEventListener("click", () => {
  count += 1;
  counterValue.textContent = count;
});
