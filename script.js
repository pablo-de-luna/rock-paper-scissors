"use strict";

const computerChoices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    return computerChoices[Math.floor(Math.random() * 3)];
};

const getHumanChoice = () => {
    const input = prompt(`ROUND ${roundCount + 1} | Rock, paper or scissors`);
    return validateHumanChoice( input.toLowerCase() );
}

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

const numberOfRounds = 5;
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

rockButton.addEventListener("click", () => {
    console.log("rock");  
});

paperButton.addEventListener("click", () => {
    console.log("paper");  
});

scissorsButton.addEventListener("click", () => {
    console.log("scissors");  
});
