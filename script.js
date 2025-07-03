"use strict";

const menu = document.querySelector("#menu");
const playButton = document.querySelector("#play-button");
const roundNumberButtons = document.querySelector("#round-buttons");
const battleground = document.querySelector("#battleground");
const roundInfo = document.querySelector("#round-info");
const playerScoreInfo = document.querySelector("#player-score");
const computerScoreInfo = document.querySelector("#computer-score");
const gameResultMessage = document.querySelector("#game-result-text");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const battleButtons = document.querySelector("#battle-buttons");
const selectionButtons = document.querySelector("#selection-buttons");
const playerHand = document.querySelector("#hand-left-space > img")
const computerHand = document.querySelector("#hand-right-space > img")
const computerHandSpace = document.querySelector("#hand-right-space");

const fightButton = document.querySelector("#fight-button");
fightButton.remove();

const nextRoundButton = document.querySelector("#next-round-button");
nextRoundButton.remove();

const centralText = document.createElement("div");
centralText.setAttribute("id", "central-text");
centralText.textContent = "MAKE YOUR CHOICE!";

let playerScore = 0;
let computerScore = 0;
let roundCount = 1;
let playerChoice;
let computerChoice;

const showPreGameInfo = () => {
    playButton.addEventListener("click", () => {
        menu.remove()
        roundInfo.textContent = `ROUND ${roundCount}`;
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
        battleButtons.appendChild(fightButton);
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

const getResult = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        showResultMessage('It\'s a DRAW');
        gameResultMessage.setAttribute("style", "color:rgb(134, 132, 132)");
        return;
    }
    if (
    (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
    showResultMessage("You WIN!");
    gameResultMessage.setAttribute("style", "color:rgb(117, 153, 66)");
    playerScore += 1;
    } else {
    showResultMessage("You LOSE!");
    gameResultMessage.setAttribute("style", "color: #bd4949");
    computerScore += 1;
    }
};

const startFight = () => {
    fightButton.addEventListener("click", () => {
        computerChoice = getComputerChoice();
        showComputerChoice(computerChoice);
        getResult(playerChoice, computerChoice);
        roundCount += 1;
        updateScoreInfo();
        fightButton.remove();
        selectionButtons.remove();
        battleButtons.appendChild(nextRoundButton);
    });
};

const showResultMessage = (message) => {
    gameResultMessage.textContent = message;
};

const updateScoreInfo = () => {
    playerScoreInfo.textContent = `PLAYER: ${playerScore}`;
    computerScoreInfo.textContent = `COMPUTER: ${computerScore}`;
};

showPreGameInfo();

showGameInfo();

updateScoreInfo();

getPlayerChoice();
startFight();


// Temporary dispatchEvent to preview game
let clickEvent = new MouseEvent("click");


selectionButtons.dispatchEvent(clickEvent);
playButton.dispatchEvent(clickEvent);
// fightButton.dispatchEvent(clickEvent);
