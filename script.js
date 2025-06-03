"use strict";

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// Function that gets Computer choice
const ComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    if (randomIndex === 0) {
        return rock;
    } else if (randomIndex === 1) {
        return paper;
    } else {
        return scissors;
    }
}
console.log("Computer's choice is:", ComputerChoice() );

// Function that gets Human choice
const HumanChoice = () => {
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
console.log("User's choice is:", HumanChoice() );

const humanScore = 0;
const computerScore = 0;

