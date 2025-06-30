"use strict";

const computerChoices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    return computerChoices[Math.floor(Math.random() * 3)];
};

const getHumanChoice = () => {
    const input = prompt(`ROUND ${roundCount + 1} | Rock, paper or scissors`);
    return validateHumanChoice( input.toLowerCase() );
}

const numberOfRounds = 5;
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

rockButton.addEventListener("click", () => {
    console.log("rock");  
});

const vsText = document.createElement("div");
vsText.setAttribute("id", "vs");
vsText.textContent = "VS";

const battleground = document.querySelector("#battleground");
const humanHand = document.querySelector("#hand-left-space > img")
const computerHandSpace = document.querySelector("#hand-right-space");

const selectionButtons = document.querySelector("#selection-buttons");

selectionButtons.addEventListener("mouseover", (event) => {
    let target = event.target;

    switch(target.id) {
        case "rock-button":
           humanHand.src = "./assets/images/rock-hand.png"
           break;
        case "paper-button":
           humanHand.src = "./assets/images/paper-hand.png"
           break;
        case "scissors-button":
           humanHand.src = "./assets/images/scissors-hand.png"
           break;
    }

    battleground.insertBefore(vsText, computerHandSpace);
    humanHand.setAttribute("style", "visibility: visible;");
});