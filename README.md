# rock-paper-scissors
The Odin Project's JavaScript Basics Project; Rock Paper Scissors

Project description can be found here:
https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors#quick-exercises-before-starting

Requirements named in the project description:
play in console --> no UI at this point

[✅] begin with a function called computerPlay that will randomly return either 'Rock', 'Paper' or 'Scissors'
[] write a function that plays a single round of Rock Paper Scissors
[] that function takes 2 parameters: playerSelection and computerSelection and 
[] returns a string that declares the winner of the round: "You Lose Paper beats Rock"
[] make your function's playerSelection parameter case insensitive
[] you want to return the results of this function call, not console.log()
[] to test this function console.log() the results:

 function playRound(playerSelection, computerSelection) {
     // your code here!
   }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

[] write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
[] If you don't know how to loop yet, just call your playRound function 5 times in a row.
[] Use console.log() to display the results of each round and the winner at the end.
[] Use prompt() to get input from the user.
[] Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
[] Feel free to create more "helper" functions if you think it would be useful.


[] Make the game more fun by making it an alpaca version (kicks, spits or makes mmmh sound)