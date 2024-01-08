//USER INPUT
//Prompt user to input a string saying either 'Rock', 'Paper' or 'Scissors'
//Save the user choice in a variable playerSelection
//Set the user choice string to lowercase

 function getPlayerChoice () {
    let choice = prompt("Please choose 'Rock', 'Paper', or 'Scissors'!").toLowerCase();
    return choice;
 }

//COMPUTER CHOICE

//Declare a variable computerSelection
//Choose a random option of either 'rock', 'paper', or 'scissors' <-- How? ==> Random number generator
// generate a random number between 1 and 3
    //const min = 1;
    //const max = 3;
    //const random = Math.floor(Math.random() * (max - min + 1)) + min;
    //match numbers to different return values
//Save that option in computerSelection
function getComputerChoice () {
    const random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    switch (random) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
                return 'scissors';
    }
}



//PLAY ROUND

//Evaluate the user choice against the computer choice
//If playerSelection is 'rock' and computerSelection is
//    'rock'     --> tie
//    'paper'    --> lose
//    'scissors' --> win
//If playerSelection is 'paper' and computerSelection is
//    'rock'     --> win
//    'paper'    --> tie
//    'scissors' --> lose
////If playerSelection is 'scissors' and computerSelection is
//    'rock'     --> lose
//    'paper'    --> win
//    'scissors' --> tie
//Save string of 'win', 'lose', or 'tie' in variable roundResult 

function playRound () {
const playerSelection = getPlayerChoice();
    console.log(playerSelection);
const computerSelection = getComputerChoice();
    console.log(computerSelection);
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'rock': 
                return 'tie';
                break;
            case 'paper':
                return 'lose';
                break;
            case 'scissors':
                return 'win';
        };
    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock': 
                return 'win';
                break;
            case 'paper':
                return 'tie';
                break;
            case 'scissors':
                return 'lose';
        };       
    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock': 
                return 'lose';
                break;
            case 'paper':
                return 'win';
                break;
            case 'scissors':
                return 'tie';
        };      
    } else {
            return 'error';
        }
    }

const roundResult = playRound();
console.log(roundResult);



//OUTPUT

//Alert message according to win, lose, or tie 
//Remember to use template literals to include player and computer choices
//If result was a tie, display message 'Let's try again!'
//Prompt user to try again.

function showRoundResult (roundResult) {
    if (roundResult === 'win' || roundResult === 'lose') {
        alert(`You ${roundResult}!`);
    } else if (roundResult === 'tie') {
        alert(`It's a ${roundResult}! I will figure out how to deal with this next time!`)
    } else {
        alert(`There must have been an ${roundResult}! I cannot understand what you chose.`)
    }
}

showRoundResult(roundResult);

//rerun in case of tie (but how to account for this in game of five rounds?) (don't commit this yet, this is not the final idea) 

//WAIT! NAME THIS FUNCTION AND ADD IT HIGHER UP! 
//TAKE showRoundResult FUNCTION APART, IN CASE OF TIE IT DOES NOT EXECUTE, ALWAYS GO WITH REPLAY BEFORE DISPLAYING FINAL RESULT IF TIE.

    if (roundResult === 'tie') {
    const newPlayerChoice = getPlayerChoice();
    const newComputerChoice = getComputerChoice();
    const newRoundResult = playRound(newPlayerChoice, newComputerChoice);
    showRoundResult(newPlayerChoice, newComputerChoice, newRoundResult);
    }