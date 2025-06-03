"use strict"

const rock = "rock";
const paper = "paper"
const scissors = "scissors"

// GENERATE random number from 0, 1 or 2
// ASSIGN "rock", "paper" and "scissors" to each number
    // IF 0 return "rock"
    // IF 1 return "paper"
    // IF 2 return "scissors"
// RETURN a string from the 3 assigned
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    
    if (randomIndex === 0) {
        return rock;
    } else if (randomIndex === 1) {
        return paper;
    } else {
        return scissors;
    }
}
console.log("Computer's choice is:", getComputerChoice() )

// ASK user a choice
// CONVERT prompt to lower case
// COMPARE prompt to valid choices
    // IF it's not valid show message saying "Invalid choice"
    // IF it's valid...
    // RETURN valid choice "rock", "paper", or "scissors"

function getHumanChoice() {
    let UserChoice = prompt("Rock, paper or scissors, choose one:", "");
    UserChoice = UserChoice.toLowerCase();
        // console.log(UserChoice);  
    if (UserChoice !== rock || paper || scissors) {
        alert("Invalid choice");
    } else {
        return console.log(UserChoice); 
    }
}

console.log ( getHumanChoice() ); 