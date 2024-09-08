function getComputerChoice() {
    let choice = Math.floor(Math.random()*100);
    if (choice>66) {
        return "rock";
    } else if (choice>33) {
        return "paper";
    } else {
        return "scissors";
    }
}

function updateScores() {
    compText.textContent = `Computer score: ${computerScore}`;
    humText.textContent = `Human score: ${humanScore}`;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        console.log("You win. Rock beats scissors.")
        humanScore += 1;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        console.log("You win. Scissors beats paper.")
        humanScore += 1;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        console.log("You win. Paper beats rock.")
        humanScore += 1;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        console.log("You lose. Rock loses to paper.")
        computerScore += 1;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
        console.log("You lose. Paper loses to scissors.")
        computerScore += 1;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        console.log("You lose. Scissors loses to rock.")
        computerScore += 1;
    } else {
        console.log(`You have tied because you both chose ${computerChoice}.`)
    }
    updateScores();

    if (humanScore == 5) {
        finalText.textContent = "YOU HAVE WON!";
        gameOver = true;
    } else if (computerScore == 5) {
        finalText.textContent = "YOU LOST :(";
        gameOver = true;
    }
}


let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", function () {
    if (!gameOver) {
        humanSelection = "rock";
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
});

paper.addEventListener("click", function () {
    if (!gameOver) {
        humanSelection = "paper";
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
});

scissors.addEventListener("click", function () {
    if (!gameOver) {
        humanSelection = "scissors";
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
});


const results = document.querySelector("div");

const compText = document.createElement("p");
compText.textContent = `Computer score: ${computerScore}`;
const humText = document.createElement("p");
humText.textContent = `Human score: ${humanScore}`;
const finalText = document.createElement("p");

results.appendChild(compText);
results.appendChild(humText);
results.appendChild(finalText)


