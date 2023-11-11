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


