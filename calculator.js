const messages = require('./calculator_messages.json');
const readline = require('readline-sync');

function prompt(message) {
  console.log(message);
}

function invalidNumber(number) {
  return Number.isNaN(Number(number));
}

// Get user input
prompt(messages.firstNumberPrompt);
let firstNumber = Number(readline.question());


while (invalidNumber(firstNumber)) {
  prompt(messages.invalidNumber);
  firstNumber = Number(readline.question());
}

prompt(messages.secondNumberPrompt);
let secondNumber = Number(readline.question());

while (invalidNumber(secondNumber)) {
  prompt(messages.invalidNumber);
  secondNumber = Number(readline.question());
}

prompt(messages.operationPrompt);
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

  console.log(messages.result + ` ${result}`);
}


calculator();