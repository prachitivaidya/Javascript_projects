const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore =0;
let computerScore = 0;


function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Tie";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You Win" : "You lose";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win" : "You lose";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win" : "You lose";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch (result) {
        case "You Win":
            resultDisplay.classList.add("greenText");
            resultDisplay.classList.remove("redText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lose":
            resultDisplay.classList.add("redText");
            resultDisplay.classList.remove("greenText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        default:
            resultDisplay.classList.remove("greenText", "redText");
            break;
    }
}
 