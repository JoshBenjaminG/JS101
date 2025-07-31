const readline = require('readline-sync');

// Get user input
console.log("=> Welcome to the loan calculator!");

console.log("=> What is the loan amount?");
let loanAmount = Number(readline.question());

console.log("=> the Annual Percentage Rate (APR)?");
let apr = Number(readline.question());

console.log("=> the loan duration? (in months)");
let duration = Number(readline.question());

function calculator() {
  let monthlyInterestRate = apr / 100 / 12;

  let monthlyPayment = loanAmount * (
    monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), -duration))
  );

  console.log(`=> The monthly payment is $${monthlyPayment.toFixed(2)}`);
}

calculator();
