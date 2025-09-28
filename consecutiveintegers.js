let readlineSync = require("readline-sync");

console.log("choose a number greater than 0");

let num = readlineSync.prompt();

console.log("press s to compute the sum or p to compute the product.");

let choice = readlineSync.prompt();

if (choice === "s") {
  let k = 0;
  for (let i = 1; i <= num; i++) {
    k += i;
  }
  console.log(k);
} else if (choice === "p") {
  let k = 1;
  for (let i = 1; i <= num; i++) {
    k *= i;
  }
  console.log(k);
}

