"use strict";

function placeABet(guess) {
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  };

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

let readlineSync = require('readline-sync');

const userGuess = parseInt(readlineSync.question('Input a guess between 1-25 '), 10);
console.log((placeABet(userGuess)));