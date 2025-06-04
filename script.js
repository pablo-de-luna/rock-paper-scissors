"use strict";

// this function return number 0, 1 or 2
function randomValue() {
    return Math.floor(Math.random() * 3);
}
const computerChoiceValue = randomValue();

// this function return choice name as string
function computerChoice(choiceNum) {
    if (choiceNum === 0) {
        return "rock";
    }
    if (choiceNum === 1) {
        return "paper";
    }
    if (choiceNum === 2) {
        return "scissors";
    }
}

// Function that get Human choice in lower case
function getHumanChoice() {
    let humanPrompt = prompt("Rock, paper or scissors, choose one:", "");
    humanPrompt = humanPrompt.toLowerCase();
    return humanPrompt;
}

// function that validates the prompt and returns it or return invalid
function humanChoice(prompt) {
    switch (prompt) {
        case "rock":
        case "paper":
        case "scissors":
            return prompt;
        default:
            return "invalid";
    }
}

console.log("Human choice is:", humanChoice( getHumanChoice() ) )
console.log("Computer choice is:", computerChoice(computerChoiceValue) );
 
// const humanScore = 0;
// const computerScore = 0;

// // GET human and computer choices 
// // ASSIGN numbers to rock, paper, scissors variables
// // COMPARE numbers to see who won the round
// // IF human won, call a function for this case
// // IF human computer, call a function for this case
// // IF its a draw, display draw message

// const playRound = (computerChoice, humanChoice) => {
//     if (computerChoice > humanChoice) {
//         // computer won function 
//     } else if (computerChoice = humanChoice) {
//         // its a draw
//     } else {
//         // human won function
//     }
// };

// playRound (computerChoice(), humanChoice