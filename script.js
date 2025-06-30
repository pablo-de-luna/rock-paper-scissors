"use strict";

const computerChoices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    return computerChoices[Math.floor(Math.random() * 3)];
};

const numberOfRounds = 5;
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const battleground = document.querySelector("#battleground");
const humanHand = document.querySelector("#hand-left-space > img")
const computerHandSpace = document.querySelector("#hand-right-space");
const selectionButtons = document.querySelector("#selection-buttons");
const playButton = document.querySelector("#play-button");

const centralText = document.createElement("div");
centralText.setAttribute("id", "central-text");
centralText.textContent = "MAKE YOUR CHOICE!";

selectionButtons.addEventListener("mouseover", (event) => {
    let target = event.target;

    switch(target.id) {
        case "rock-button":
           humanHand.src = "./assets/images/rock-hand.png"
           break;
        case "paper-button":
           humanHand.src = "./assets/images/paper-hand.png"
           break;
        case "scissors-button":
           humanHand.src = "./assets/images/scissors-hand.png"
           break;
    }
});

selectionButtons.addEventListener("mouseover", () => {
    centralText.textContent = "VS";
    centralText.setAttribute(
        "style", "font-size: 300px; color: #6da4a9;"
    );
    humanHand.setAttribute("style", "visibility: visible;");
});

playButton.addEventListener("click", () => {
    battleground.removeChild(playButton);
    battleground.insertBefore(centralText, computerHandSpace);
    selectionButtons.setAttribute("style", "visibility: visible;");
});