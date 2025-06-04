"use strict";

// this function return number 0, 1 or 2
function randomValue() {
    return Math.floor(Math.random() * 3);
}
const computerChoiceValue = randomValue();

// this function return choice name as string
function computerChoice() {
    if (computerChoiceValue === 0) {
        return "rock";
    }
    if (computerChoiceValue === 1) {
        return "paper";
    }
    if (computerChoiceValue === 2) {
        return "scissors";
    }
}
console.log("Computer choice is:", computerChoice() );

// TODO : make this function two separated functions 
// Function that gets Human choice
// const humanChoice = () => {
//     let UserChoice = prompt("Rock, paper or scissors, choose one:", "");
//     UserChoice = UserChoice.toLowerCase();
//         // console.log(UserChoice); 
//     if (UserChoice === rock ||
//         UserChoice === paper ||
//         UserChoice === scissors) { 
//         return UserChoice;
//     } else { 
//         alert("Invalid choice"); 
//     }
// };
// console.log("User's choice is:", humanChoice() );

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

// // playRound( computerChoice(), humanChoice() )