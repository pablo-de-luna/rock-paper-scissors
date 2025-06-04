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
    let input = prompt("Rock, paper or scissors, choose one:", "");
    return humanChoiceValidation( input.toLowerCase() );
}
// function that return VALID human choice, return "invalid" if it's not
function humanChoiceValidation(choice) {
    switch (choice) {
        case "rock":
        case "paper":
        case "scissors":
            return choice;
        default:
            return "invalid";
    }
}

console.log("Human has selected:", getHumanChoice() );
console.log("Computer has selected:", getComputerChoice() );

const humanScore = 0;
const computerScore = 0;

// GET human and computer choice
// CHECK if human choice defeat computer choice
    // IF rock vs scissors or
    //    paper vs rock or
    //    scissors vs paper
        // SHOW message "Human won this round"
        // RETURN human score + 1
    // ELSE
        // SHOW message "Computer won this round"
        // RETURN computer score + 1
        
function playRound(humanChoice, computerChoice) {
    
}