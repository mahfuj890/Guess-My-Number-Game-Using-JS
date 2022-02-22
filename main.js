"use strict";

//Get the random value
const randomNumber = Math.trunc(Math.random()* 20) + 1 ;
document.querySelector(".number").textContent = randomNumber;

//Click Event
 let checkButton = document.querySelector(".check");
 if(checkButton){
     checkButton.addEventListener("click",()=>{
         let guessValue = Number(document.querySelector(".guess").value) ;
         let messageText =  document.querySelector(".message");
         if(!guessValue){
           messageText.textContent="⚙ No Number";
         }
         else if(guessValue < 0 ){
             alert("Please Enter A Positive Number!!")
             guessValue.value="";
         }
         else if(guessValue === randomNumber){
            messageText.textContent="🔓 Correct Number";
         }
         else if(guessValue > randomNumber){
            messageText.textContent="🔐 Too High";
         }
         else if(guessValue < randomNumber){
            messageText.textContent="🔐 Too Low";
         }
     })
 }