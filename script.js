"use strict";

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3); 
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let input = prompt(`ROUND ${roundCount + 1} | Rock, paper or scissors`);
    return validateHumanChoice( input.toLowerCase() );
}

function validateHumanChoice(choice) {
    if (choice === 'rock' ||
        choice === 'paper' ||
        choice === 'scissors') {
        return choice;
    } else {
        return 'invalid';
    }
}

function playRound(humanChoice, computerChoice) { 
    setupRound();
    
    if (humanChoice === 'invalid') {
        console.log('INVALID INPUT, It\'s a DRAW');
        return;
    }
    if (humanChoice === computerChoice) {
        console.log('It\'s a DRAW');
        return;
    }
    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`You WIN!, ${humanChoice} beat ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You LOSE!, ${computerChoice} beat ${humanChoice}`);
        computerScore++;
    }
}

function setupRound() {
    console.clear();
    roundCount += 1;
    console.log( 'ROUND', roundCount.toString() );
}

// Call playRound function 5 times
function playGame() {
    if (roundCount < 5) {
        playRound( getHumanChoice(), getComputerChoice() );
        playGame();
    } else {
        return;
    }
}

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

alert('ROCK, PAPER SCISSORS!')
playGame();
console.clear();

if (humanScore > computerScore) {
    console.log('YOU WIN THE GAME')
} else if (humanScore === computerScore) {
    console.log('IT\'S A DRAW')
} else {
    console.log('YOU LOSE THE GAME');
}

console.log(`You got ${ humanScore.toString() } wins`);
console.log(`Computer got ${ computerScore.toString() } wins`);