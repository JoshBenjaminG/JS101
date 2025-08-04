const readline = require('readline-sync');

console.log("=> Welcome to rock paper scissors!");

function normalize(input) {
  input = input.toLowerCase();
  if (input === "rock" || "r") return 'rock';
  if (input === "paper" || "p") return 'paper';
  if (input === "scissors" || "s") return 'scissors';
}


function play() {
  while (true) {
    console.log("=> Do you choose rock, paper, or scissors?");
    let rawInput = readline.question().toLowerCase();
    let normalizedInput = normalize(rawInput);


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

    console.log(`You chose ${normalizedInput}!`);
    console.log(`The CPU chose ${computerChoice}!`);

    if (normalizedInput === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (normalizedInput === 'r'  && computerChoice === 'scissors') ||
      (normalizedInput === 'p' && computerChoice === 'rock') ||
      (normalizedInput === 's' && computerChoice === 'paper')
    ) {
      console.log("You win!");
    } else {
      console.log("CPU wins!");
    }
    let again = readline.question("=> Play again? (y/n)").toLowerCase();
    if (again === "n") {
      break;
    }
  }
}

play();