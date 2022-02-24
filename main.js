"use strict";

//Get the random value
const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = randomNumber;
let scoreValue = 20;
//Click Event
let checkButton = document.querySelector(".check");
if (checkButton) {
  checkButton.addEventListener("click", () => {
    let guessValue = Number(document.querySelector(".guess").value);
    let messageText = document.querySelector(".message");
    let score = document.querySelector(".score");
    if (!guessValue) {
      messageText.textContent = "⚙ No Number";
    } else if (guessValue < 0) {
      alert("Please Enter A Positive Number!!");
      guessValue.value = "";
    } else if (guessValue === randomNumber) {
      messageText.textContent = "🔓 Correct Number";
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
            messageText.textContent = "🔐 Too Low"
            scoreValue--;
            score.textContent = scoreValue;
          } else {
            messageText.textContent = "🔏 You Lose The Game";
            score.textContent = 0;
          }
    }
  });
}
