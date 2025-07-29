const readLine = require('readline-sync');

function prompt(message) {
  console.log(message);
}

// Get user input
prompt("=> What is the first number?");
let firstNumber = Number(readLine.question());

prompt("=> What is the second number?");
let secondNumber = Number(readLine.question());

prompt("=> What is the operation?");
let operation = readLine.question();

function calculator() {
  let result;

  switch (operation) {
    case '+':
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case '-':
      result = Number(firstNumber) - Number(secondNumber);
      break;
    case '*':
      result = Number(firstNumber) * Number(secondNumber);
      break;
    case '/':
      result = Number(firstNumber) / Number(secondNumber);
      break;
    default:
      result = "Invalid operation";
  }

  console.log(`=> ${firstNumber} ${operation} ${secondNumber} is ${result}`);
}


calculator();