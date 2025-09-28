let readlineSync = require("readline-sync");

let date = new Date().getFullYear();

console.log("What is your age?");

let age = Number(readlineSync.prompt());

console.log("At what age would you like to retire?");

let retireAge = Number(readlineSync.prompt());

function retirement(age, retireAge) {
  let years = retireAge - age;
  let finalYear = date + years;
  let finalAge = age + years;
  console.log(`You will retire in ${finalYear} and you will be ${finalAge} years old`);
}

retirement(age, retireAge);

