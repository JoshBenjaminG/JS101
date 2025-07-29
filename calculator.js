const readlineSync = require('readline-sync');
// Ask the user for the first number.
let firstNumber = Number(readlineSync.question("What is the first number?\n"));
let secondNumber = Number(readlineSync.question("What is the second number?\n"));
let operation = readlineSync.question("What is the operation?\n");

function calculator() {
  let result;

  if (operation === "+") {
    result = firstNumber + secondNumber;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
  } else if (operation === "/") {
    result = firstNumber / secondNumber;
  }

  console.log(`${firstNumber} ${operation} ${secondNumber} is ${result}`);
}  

calculator();

// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.