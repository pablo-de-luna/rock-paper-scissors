"use strict";

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// Function that get Computer choice
const computerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    if (randomIndex === 0) {
        return rock;
    } else if (randomIndex === 1) {
        return paper;
    } else {
        return scissors;
    }
}
console.log("Computer's choice is:", computerChoice() );

// TODO : make this function two separated functions 
// Function that gets Human choice
const humanChoice = () => {
    let UserChoice = prompt("Rock, paper or scissors, choose one:", "");
    UserChoice = UserChoice.toLowerCase();
        // console.log(UserChoice); 
    if (UserChoice !== rock &&
        UserChoice !== paper &&
        UserChoice !== scissors) { 
        alert("Invalid choice"); 
    } else { 
        return UserChoice; 
    }
}
console.log("User's choice is:", humanChoice() );

const humanScore = 0;
const computerScore = 0;

// GET human and computer choices 
// ASSIGN numbers to rock, paper, scissors variables
// COMPARE numbers to see who won the round
// IF human won, call a function for this case
// IF human computer, call a function for this case
const playRound = () => {}


playRound(com)