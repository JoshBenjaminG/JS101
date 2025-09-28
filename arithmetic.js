let readlineSync = require("readline-sync");

console.log("What the first number?");

let num1 = Number(readlineSync.prompt());

console.log("What the second number?");

let num2 = Number(readlineSync.prompt());

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);