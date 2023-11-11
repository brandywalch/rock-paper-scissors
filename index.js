// Function to return either rock, paper or scissors at random.
// Create variable to hold random number
// Use Math to return either 0,1 2 at random
// If statement for rock,paper,scissors
// CALL function

function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return "Rock"
    } else if (randomNum === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

// console.log(getComputerChoice())

// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Use if statements to delcare winner

let playerSelection ="Scissors"
const computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper Beats Rock!"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock Beats Scissors"
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "Its a Tie!"

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors Beats Paper"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper Beats Rock"
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "It's a Tie!"
    } 

    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock Beats Scissors"
    }  else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors Beats Paper"
    }  else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "It's a Tie!"
    } 
}


console.log(playRound(playerSelection, computerSelection))
