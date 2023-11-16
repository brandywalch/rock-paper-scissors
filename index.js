const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)]
    return(choice)
}

function checkWinner (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        return "player"
    } else {
        return "computer"
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner (playerSelection, computerSelection)
    if (result === "tie") {
        return "It's a Tie!"
    } else if (result === "player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock" 
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
 }

game()

