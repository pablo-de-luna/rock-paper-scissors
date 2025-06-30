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

const leftHand = document.querySelector("#hand-left-space > img");

rockButton.addEventListener("mouseover", () => {
    leftHand.src = "./assets/images/rock-hand.png"
});

paperButton.addEventListener("mouseover", () => {
    leftHand.src = "./assets/images/paper-hand.png"
});

scissorsButton.addEventListener("mouseover", () => {
    leftHand.src = "./assets/images/scissors-hand.png"
});

