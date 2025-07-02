"use strict";

const menu = document.querySelector("#menu");
const playButton = document.querySelector("#play-button");
const roundButtons = document.querySelector("#round-buttons");
const battleground = document.querySelector("#battleground");
const roundInfo = document.querySelector("#round-info");
const playerScoreInfo = document.querySelector("#player-score");
const computerScoreInfo = document.querySelector("#computer-score");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const battleButtons = document.querySelector("#battle-buttons");
const selectionButtons = document.querySelector("#selection-buttons");
const playerHand = document.querySelector("#hand-left-space > img")
const computerHandSpace = document.querySelector("#hand-right-space");

const centralText = document.createElement("div");
centralText.setAttribute("id", "central-text");
centralText.textContent = "MAKE YOUR CHOICE!";

playButton.addEventListener("click", () => {
    menu.remove()
    battleground.insertBefore(centralText, computerHandSpace);
    battleButtons.setAttribute("style", "visibility: visible;");
    roundInfo.textContent = "ROUND 1";
});

selectionButtons.addEventListener("click", (event) => {
    let targetButton = event.target;

    switch(targetButton.id) {
        case "rock-button":
           playerHand.src = "./assets/images/rock-hand.png"
           break;
        case "paper-button":
           playerHand.src = "./assets/images/paper-hand.png"
           break;
        case "scissors-button":
           playerHand.src = "./assets/images/scissors-hand.png"
           break;
    }
});

selectionButtons.addEventListener("click", () => {
    playerScoreInfo.textContent = "PLAYER: 0"
    computerScoreInfo.textContent = "COMPUTER: 0"
    centralText.textContent = "VS";
    centralText.setAttribute("style", "font-size: 250px; color: #6da4a9;");
    playerHand.setAttribute("style", "visibility: visible;");
});

const computerChoices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    return computerChoices[Math.floor(Math.random() * 3)];
};

const numberOfRounds = 5;
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// Temporary dispatchEvent to preview game
let clickEvent = new MouseEvent("click");

// playButton.dispatchEvent(clickEvent);
// selectionButtons.dispatchEvent(clickEvent);