"use strict";

const menu = document.querySelector("#menu");
const playButton = document.querySelector("#play-button");
const roundNumberButtons = document.querySelector("#round-buttons");
const battleground = document.querySelector("#battleground");
const roundInfo = document.querySelector("#round-info");
const playerScoreInfo = document.querySelector("#player-score");
const computerScoreInfo = document.querySelector("#computer-score");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const battleButtons = document.querySelector("#battle-buttons");
const selectionButtons = document.querySelector("#selection-buttons");
const fightButton = document.querySelector("#fight-button");
const playerHand = document.querySelector("#hand-left-space > img")
const computerHand = document.querySelector("#hand-right-space > img")
const computerHandSpace = document.querySelector("#hand-right-space");

const centralText = document.createElement("div");
centralText.setAttribute("id", "central-text");
centralText.textContent = "MAKE YOUR CHOICE!";

const showPreGameInfo = () => {
    playButton.addEventListener("click", () => {
        menu.remove()
        battleground.insertBefore(centralText, computerHandSpace);
        battleButtons.setAttribute("style", "visibility: visible;");
        roundInfo.textContent = "ROUND 1";
    });
};

const showGameInfo = () => {
    selectionButtons.addEventListener("click", () => {
        playerScoreInfo.textContent = "PLAYER: 0"
        computerScoreInfo.textContent = "COMPUTER: 0"
        centralText.textContent = "VS";
        centralText.setAttribute("style", "font-size: 200px; color: #6da4a9;");
    });
};

// fightButton.addEventListener("click", () => {
//     roundInfo.setAttribute(
//         "style", "color:rgb(109, 169, 109); transition: all 2s; font-size: 50px;"
//     )
//     roundInfo.textContent = "YOU WIN!";
// });

const showPlayerChoice = () => {
    selectionButtons.addEventListener("click", (event) => {
        let targetButton = event.target;

        switch(targetButton.id) {
            case "rock-button":
            playerHand.src = "./assets/images/rock-hand.png";
            break;
            case "paper-button":
            playerHand.src = "./assets/images/paper-hand.png";
            break;
            case "scissors-button":
            playerHand.src = "./assets/images/scissors-hand.png";
            break;
        }
    
        playerHand.setAttribute("style", "visibility: visible;");
    });
};

const getComputerChoice = () => {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
};

const showComputerChoice = (choice) => {
    switch(choice) {
        case "rock":
            computerHand.src = "./assets/images/rock-hand.png";
            break;
        case "paper":
            computerHand.src = "./assets/images/paper-hand.png";
            break;
        case "scissors":
            computerHand.src = "./assets/images/scissors-hand.png";
            break;
    }

    computerHand.setAttribute("style", "visibility: visible;");
};

// if (humanChoice === computerChoice) {
// console.log('It\'s a DRAW');
// return;
// }

// if (
// (humanChoice === 'rock' && computerChoice === 'scissors')
// || (humanChoice === 'paper' && computerChoice === 'rock')
// || (humanChoice === 'scissors' && computerChoice === 'paper')
// ) {
// console.log(`You WIN!, ${humanChoice} beat ${computerChoice}`);
// humanScore += 1;
// } else {
// console.log(`You LOSE!, ${computerChoice} beat ${humanChoice}`);
// computerScore += 1;
// }

const getWinner = () => {

};

showPreGameInfo();
showGameInfo();

showPlayerChoice();

const computerChoice = getComputerChoice();

const startFight = () => {
    fightButton.addEventListener("click", () => {
        showComputerChoice(computerChoice);
    });
};

startFight();




const numberOfRounds = 5;
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// Temporary dispatchEvent to preview game
let clickEvent = new MouseEvent("click");

// playButton.dispatchEvent(clickEvent);
// selectionButtons.dispatchEvent(clickEvent);