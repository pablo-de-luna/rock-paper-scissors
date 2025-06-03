"use strict"

const rock = "rock";
const paper = "paper"
const scissors = "scissors"

const ComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    if (randomIndex === 0) {
        return rock;
    } else if (randomIndex === 1) {
        return paper;
    } else {
        return scissors;}
}
console.log("Computer's choice is:", ComputerChoice() )

// ASK user a choice
// CONVERT prompt to lower case
// COMPARE prompt to valid choices
    // IF it's not valid show message saying "Invalid choice"
    // IF it's valid...
    // RETURN valid choice "rock", "paper", or "scissors"

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
console.log("User's choice is:", HumanChoice() )