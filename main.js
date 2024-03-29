"use strict";

//Get the random value
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
let highScore = 0;
let numberValue = document.querySelector(".number");
let messageText = document.querySelector(".message");
let score = document.querySelector(".score");
let devButton = document.querySelector(".devButton");
numberValue.textContent = "?";
let checkButton = document.querySelector(".check");

//Click Event
if (checkButton) {
  checkButton.addEventListener("click", () => {
    let guessValue = Number(document.querySelector(".guess").value);
    if (!guessValue) {
      messageText.textContent = "⚙ No Number";
    } else if (guessValue < 0) {
      alert("Please Enter A Positive Number!!");
    } else if (guessValue === randomNumber) {
      messageText.textContent = "🔓 Correct Number";
      document.querySelector("body").style.cssText =
        "background-color: #60b347;";
      numberValue.textContent = randomNumber;
      document.querySelector(".number").style.cssText =
        "width:30rem;color:white;background: #f30f0f ";
      devButton.disabled = true;
      highScore += scoreValue;
      document.querySelector(".highscore").textContent = highScore;
    } else if (guessValue > randomNumber) {
      displayMessage("🔐 Too High", "🔏 You Lose The Game");
    } else if (guessValue < randomNumber) {
      displayMessage("🔐 Too Low", "🔏 You Lose The Game");
    }
  });
}

function displayMessage(valueText, loseText) {
  if (scoreValue > 1) {
    messageText.textContent = valueText;
    scoreValue--;
    score.textContent = scoreValue;
  } else {
    messageText.textContent = loseText;
    score.textContent = 0;
  }
}

//Run Radmon Number Again Without Page Reload
document.querySelector(".again").addEventListener("click", () => {
  scoreValue = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber, scoreValue);
  messageText.textContent = "Start Guessing....";
  score.textContent = scoreValue;
  numberValue.textContent = randomNumber;
  numberValue.textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.cssText = "background-color: #222;";
  document.querySelector(".number").style.cssText = "width:15rem;";
  if (devButton.disabled == true) {
    devButton.disabled = false;
  }
});

//Display Number For Developer
if (devButton) {
  devButton.addEventListener("click", () => {
    if (numberValue.textContent == "?") {
      numberValue.textContent = randomNumber;
    } else if (numberValue.textContent == randomNumber) {
      numberValue.textContent = "?";
    }
  });
}
