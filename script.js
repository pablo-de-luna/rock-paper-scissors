"use strict";

const menu = document.querySelector("#menu");
const roundButtons = document.querySelector("#round-buttons");
const selectionButtons = document.querySelector("#selection-buttons");
const battleground = document.querySelector("#battleground");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const humanHand = document.querySelector("#hand-left-space > img")
const computerHandSpace = document.querySelector("#hand-right-space");
const playButton = document.querySelector("#play-button");

const centralText = document.createElement("div");
centralText.setAttribute("id", "central-text");
centralText.textContent = "MAKE YOUR CHOICE!";

playButton.addEventListener("click", () => {
    menu.remove()
    battleground.insertBefore(centralText, computerHandSpace);
    selectionButtons.setAttribute("style", "visibility: visible;");
});

selectionButtons.addEventListener("mouseover", (event) => {
    let targetButton = event.target;

    switch(targetButton.id) {
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

const computerChoices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    return computerChoices[Math.floor(Math.random() * 3)];
};

const numberOfRounds = 5;
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

// Temporary dispatchEvent to preview game
let clickEvent = new MouseEvent("click");
playButton.dispatchEvent(clickEvent);

let mouseoverEvent = new MouseEvent("mouseover");
selectionButtons.dispatchEvent(mouseoverEvent);