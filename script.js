"use strict"

// Generate random number from 0, 1 or 2
// Assign "rock", "paper" and "scissors" to each number
    // if 0 return "rock"
    // if 1 return "paper"
    // if 2 return "scissors"
// Returns a string from the 3 assigned
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    
    if (randomIndex === 0) {
        return "rock";
    } else if (randomIndex === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log( getComputerChoice() )