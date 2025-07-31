const readline = require('readline-sync');

function prompt(message) {
  console.log(message);
}

function invalidNumber(number) {
  return Number.isNaN(Number(number));
}

// Get user input
prompt("=> What is the first number?");
let firstNumber = Number(readline.question());

while (invalidNumber(firstNumber)) {
  prompt("=> That's not a valid number.");
  firstNumber = Number(readline.question());
}

prompt("=> What is the second number?");
let secondNumber = Number(readline.question());

while (invalidNumber(secondNumber)) {
  prompt("=> That's not a valid number.");
  secondNumber = Number(readline.question());
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

function calculator() {
  let result;

  switch (operation) {
    case '1':
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case '2':
      result = Number(firstNumber) - Number(secondNumber);
      break;
    case '3':
      result = Number(firstNumber) * Number(secondNumber);
      break;
    case '4':
      result = Number(firstNumber) / Number(secondNumber);
      break;
    default:
      result = "Invalid operation";
  }

  console.log(`=> The output is ${result}`);
}


calculator();