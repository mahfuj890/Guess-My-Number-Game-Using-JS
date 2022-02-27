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
      guessValue.value = "";
    } else if (guessValue === randomNumber) {
      messageText.textContent = "🔓 Correct Number";
      document.querySelector("body").style.cssText =
        "background-color: #60b347;";
      document.querySelector(".number").style.cssText =
        "width:30rem;color:white;background: #f30f0f ";
      highScore += scoreValue;
      document.querySelector(".highscore").textContent = highScore;
    } else if (guessValue > randomNumber) {
      if (scoreValue > 1) {
        messageText.textContent = "🔐 Too High";
        scoreValue--;
        score.textContent = scoreValue;
      } else {
        messageText.textContent = "🔏 You Lose The Game";
        score.textContent = 0;
      }
    } else if (guessValue < randomNumber) {
      if (scoreValue > 1) {
        messageText.textContent = "🔐 Too Low";
        scoreValue--;
        score.textContent = scoreValue;
      } else {
        messageText.textContent = "🔏 You Lose The Game";
        score.textContent = 0;
      }
    }
  });
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
});

//Display Number For Developer
if (devButton) {
  devButton.addEventListener("click", () => {
    numberValue.textContent = randomNumber;
  });
}
