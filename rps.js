const readline = require('readline-sync');

console.log("=> Welcome to rock paper scissors!");

function play() {
  console.log("=> Do you choose rock, paper, or scissors?");
  let playerChoice = readline.question().toLowerCase();

  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  switch (randomNumber) {
    case 1:
      computerChoice = 'rock';
      break;
    case 2:
      computerChoice = 'paper';
      break;
    case 3:
      computerChoice = 'scissors';
      break;
  }

  console.log(`You chose ${playerChoice}!`);
  console.log(`The CPU chose ${computerChoice}!`);

  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log("You win!");
  } else {
    console.log("CPU wins!");
  }
}

play();
