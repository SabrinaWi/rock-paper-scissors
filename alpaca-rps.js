//begin with a function called computerPlay that will randomly return either 'Rock', 'Paper' or 'Scissors'


//create a global variable computerResult to safe the result of the computerPlay function
const computerResult = computerPlay();
//write function that saves it's result to computerResult

function computerPlay() {

//create an array for the 3 options
const computerOptions = ["Rock", "Paper", "Scissors"];
//write a function that chooses 1 of the 3 from the array at random and writes it into computerResult
const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
//return computerResult
return computerChoice;
};

console.log(computerResult);