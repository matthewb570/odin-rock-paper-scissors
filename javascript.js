const playerSelection = prompt("Rock, paper, or scissors?");

const computerSelection = getComputerChoice();
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Tie! Both players played " + computerSelection + ".";
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "scissors") {
            return "You lose! Scissors beats Paper";
        } else {
            return "You win! Paper beats Rock";
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection.toLowerCase() === "rock") {
            return "You lose! Rock beats Scissors";
        } else {
            return "You win! Scissors beats Paper";
        }
    } else {
        return playerSelection + " isn't a valid option. Please try again.";
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