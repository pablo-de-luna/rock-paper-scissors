"use strict";

// this function return the computer choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3); 
    const choiceName =
        randomNum === 0 ? "rock" :
        randomNum === 1 ? "paper" :
        "scissors";
    return choiceName; 
}

// Function that get Human choice in lower case
function getHumanChoice() {
    let humanPrompt = prompt("Rock, paper or scissors, choose one:", "");
    return humanPrompt.toLowerCase();
}

// function that return choice if its valid, return "invalid" if it's not the case
function humanChoice(choice) {
    switch (choice) {
        case "rock":
        case "paper":
        case "scissors":
            return choice;
        default:
            return "invalid";
    }
}

// console.log("Computer has selected:", getComputerChoice() );
// console.log("Human has selected:", humanChoice( getHumanChoice() ) );

console.log(
`Human | ${humanChoice( getHumanChoice() )}
 vs ${getComputerChoice()} | Computer`
)

const humanScore = 0;
const computerScore = 0;