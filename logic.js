function getComputerChoice() {
    let choice = Math.floor(Math.random()*100);
    //console.log(choice);
    if (choice>66) {
        return "rock";
    } else if (choice>33) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let h_choice = prompt("What do you choose?");
    //console.log(h_choice);
    if (h_choice.toLowerCase() === "rock" || h_choice.toLowerCase() === "paper" || h_choice.toLowerCase() === "scissors") {
        return h_choice;
    } else {
        while (h_choice.toLowerCase() !== "rock" && h_choice.toLowerCase() !== "paper" && h_choice.toLowerCase() !== "scissors") {
            h_choice = prompt("What do you choose?");
            //console.log(h_choice);
        }
        return h_choice;
    }
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
        console.log(`You have tied because you both chose ${humanChoice}.`)
    }
}

function playGame() {
    for (let i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Your score: " + humanScore);
        console.log("Computer's score: " + computerScore);
        console.log("||------------------------||");
    }

    if (humanScore > computerScore) {
        console.log("YOU HAVE WON!");
    } else if (humanScore < computerScore) {
        console.log("YOU LOST :(");
    } else {
        console.log("IT IS A... TIE!");
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();

