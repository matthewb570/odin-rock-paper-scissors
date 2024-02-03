const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissors.addEventListener("click", playRound);

// game();

// function game() {
    
//     let playerScore = 0;
//     let computerScore = 0;
    
//     let gamesRemaining = 5;
//     while (gamesRemaining > 0) {
//         const playerSelection = prompt("Rock, paper, or scissors?");
//         const computerSelection = getComputerChoice();
//         console.log(computerSelection);

//         const roundResult = playRound(playerSelection, computerSelection);
//         if (roundResult !== null) {
//             if (roundResult) {
//                 playerScore++;
//             } else {
//                 computerScore++;
//             }
//             gamesRemaining--;
//         }
//     }

//     if (playerScore > computerScore) {
//         console.log("You win!");
//     } else if (playerScore < computerScore) {
//         console.log("You lose!");
//     } else {
//         console.log("Tie!");
//     }

//     console.log("Player: " + playerScore + ", Computer: " + computerScore);
// }

function playRound(event) {

    const divComputerSelection = document.querySelector("#divComputerSelection");
    const divResult = document.querySelector("#divResult");
    // const divScore = document.querySelector("#divScore");

    const playerSelection = event.target.textContent;
    const computerSelection = getComputerChoice();

    divComputerSelection.textContent = "Computer played " + computerSelection + ".";

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        divResult.textContent = "Tie! Both players played " + computerSelection + ".";
        return null;
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "paper") {
            divResult.textContent = "You lose! Paper beats Rock.";
            return false;
        } else {
            divResult.textContent = "You win! Rock beats Scissors.";
            return true;
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "scissors") {
            divResult.textContent = "You lose! Scissors beats Paper.";
            return false;
        } else {
            divResult.textContent = "You win! Paper beats Rock.";
            return true;
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection.toLowerCase() === "rock") {
            divResult.textContent = "You lose! Rock beats Scissors.";
            return false;
        } else {
            divResult.textContent = "You win! Scissors beats Paper.";
            return true;
        }
    } else {
        divResult.textContent = playerSelection + " isn't a valid option. Please try again.";
        return null;
    }
}

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"]
    return options[getRandomIntegerInRange(0, 2)];
}

/*
    Returns a random integer between min (inclusive) and max (inclusive)
*/
function getRandomIntegerInRange(min, max) {
    return Math.floor((Math.random() * (max - min + 1))) + min;
}