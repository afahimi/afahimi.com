const headsButton = document.getElementById("heads-button");
const tailsButton = document.getElementById("tails-button");
const resultElement = document.getElementById("result");

headsButton.addEventListener("click", function() {
  let flipResult = Math.random() < 0.5 ? "Heads" : "Tails";
  if (flipResult === "Heads") {
    resultElement.innerHTML = "You won!";
  } else {
    resultElement.innerHTML = "You lost. Try again?";
  }
});

tailsButton.addEventListener("click", function() {
  let flipResult = Math.random() < 0.5 ? "Heads" : "Tails";
  if (flipResult === "Tails") {
    resultElement.innerHTML = "You won!";
  } else {
    resultElement.innerHTML = "You lost. Try again?";
  }
});