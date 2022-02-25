"use strict";

//Get the random value
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
let numberValue = document.querySelector(".number")
let messageText = document.querySelector(".message");
let score = document.querySelector(".score");
numberValue.textContent = randomNumber;
//Click Event
let checkButton = document.querySelector(".check");
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

document.querySelector(".again").addEventListener("click",()=>{
  scoreValue = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
 console.log(randomNumber,scoreValue);
 messageText.textContent="Start Guessing....";
 score.textContent = scoreValue
 numberValue.textContent="?"
 document.querySelector(".guess").value="";
 document.querySelector("body").style.cssText =
 "background-color: #222;";
document.querySelector(".number").style.cssText =
 "width:15rem;";
})
