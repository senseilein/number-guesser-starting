let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// My code below:

let incorrectInput = "Check the rules, your number is out of range! That's an easy point for the computer!";

// 1. This function returns a random integer between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

/* 2. These functions are called each round to determine which guess is closest to the target number
   If both players are tied, the human user should win.
*/

const getAbsoluteDistance = (x, y) => {
    return Math.abs(x - y);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    
    let diffWithHuman = getAbsoluteDistance(humanGuess, targetNumber);
    let diffWithComputer = getAbsoluteDistance(computerGuess, targetNumber);

    if (humanGuess > 10) {
        currentRoundNumber--;
        return alert(incorrectInput);
      }    

    return diffWithHuman <= diffWithComputer ? true : false;
}

//3. this function will be used to correctly increase the winner’s score after each round.
const updateScore = (winner) => {
    winner == "human" ? (humanScore ++) : (computerScore ++);
};

//4. This function will be used to update the round number after each round.
const advanceRound = () => {
    return (currentRoundNumber ++);
};