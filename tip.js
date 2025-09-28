let readlineSync = require("readline-sync");

console.log("what is the bill?");

let bill = readlineSync.prompt();

console.log("what is the tip percentage?");

let tipPercentage = readlineSync.prompt();

let tip = bill * (tipPercentage / 100);

console.log(`The bill is ${bill} and the tip is ${tip}`);