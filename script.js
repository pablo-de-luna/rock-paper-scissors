"use strict";

// Function that return the computer choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3); 
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function that get Human choice in lower case
function getHumanChoice() {
    let input = prompt("Rock, paper or scissors, choose one:", "");
    return humanChoiceValidation( input.toLowerCase() );
}
// Function that return VALID human choice, return "invalid" if it's not
function humanChoiceValidation(choice) {
    if (choice === "rock" ||
        choice === "paper" ||
        choice === "scissors") {
        return choice;
    } else {
        return "invalid";
    }
}
        
// Function that log who won / draw. And returns
function playRound(humanChoice, computerChoice) {  
    roundCount += 1;

    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You WIN!, ${humanChoice} beat ${computerChoice}`);
        humanScore += 1;
    } else if (humanChoice === computerChoice) {
        console.log("It's a DRAW");
    } else if (humanChoice === "invalid") {
        console.log("INVALID INPUT, It's a DRAW");
    } else {
        console.log(`You LOSE!, ${computerChoice} beat ${humanChoice}`);
        computerScore += 1;
    }
}

// Function that call new choices from choice functions and call playRound
function playGame() {
        console.log("ROUND", roundCount);
        playRound(getHumanChoice(), getComputerChoice());       
}

// Function that call playGame function 5 times
function fullGame() {
    if (roundCount < 6) {
        playGame();
        fullGame();
    } else {
        return;
    }
}

// Score and round count
let humanScore = 0;
let computerScore = 0;
let roundCount = 1;

// Game sequence
alert("ROCK, PAPER SCISSORS!")
fullGame();
console.log("human score is =", humanScore);
console.log("computer score is =", computerScore);

if (humanScore > computerScore) {
    console.log("YOU WIN")
} else if (humanScore === computerScore) {
    console.log("DRAW")
} else {
    console.log("YOU LOSE");
}