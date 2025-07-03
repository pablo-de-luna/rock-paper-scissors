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

let playerScore = 0;
let computerScore = 0;
let roundCount = 1;
let playerChoice;
let computerChoice;

const centralText = document.createElement("div");
centralText.setAttribute("id", "central-text");
centralText.textContent = "MAKE YOUR CHOICE!";

const showPreGameInfo = () => {
    playButton.addEventListener("click", () => {
        menu.remove()
        roundInfo.setAttribute("style", "visibility: visible;");
        battleground.insertBefore(centralText, computerHandSpace);
        battleButtons.setAttribute("style", "visibility: visible;");
    });
};

const showGameInfo = () => {
    selectionButtons.addEventListener("click", () => {
        playerScoreInfo.setAttribute("style", "visibility: visible;");
        computerScoreInfo.setAttribute("style", "visibility: visible;");
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

const getPlayerChoice = () => {
    selectionButtons.addEventListener("click", (event) => {
        let targetButton = event.target;

        switch(targetButton.id) {
            case "rock-button":
            playerHand.src = "./assets/images/rock-hand.png";
            playerChoice = "rock";
            break;
            case "paper-button":
            playerHand.src = "./assets/images/paper-hand.png";
            playerChoice = "paper";
            break;
            case "scissors-button":
            playerHand.src = "./assets/images/scissors-hand.png";
            playerChoice = "scissors";
            break;
        }

        playerHand.setAttribute("style", "visibility: visible;");
    });
};

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
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

const getWinner = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        console.log('It\'s a DRAW');
        return;
    }
    if (
    (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
    console.log("You WIN!");
    playerScore += 1;
    } else {
    console.log("You LOSE!");
    computerScore += 1;
    }
};

const startFight = () => {
    fightButton.addEventListener("click", () => {
        computerChoice = getComputerChoice();
        showComputerChoice(computerChoice);
        getWinner(playerChoice, computerChoice);
    });
};

showPreGameInfo();
showGameInfo();

getPlayerChoice();

startFight();

roundInfo.textContent = `ROUND ${roundCount}`;
playerScoreInfo.textContent = `PLAYER: ${playerScore}`;
computerScoreInfo.textContent = `COMPUTER: ${computerScore}`;




// Temporary dispatchEvent to preview game
let clickEvent = new MouseEvent("click");

playButton.dispatchEvent(clickEvent);
selectionButtons.dispatchEvent(clickEvent);