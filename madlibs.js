let readlineSync = require("readline-sync");

console.log("What is the noun?");

let noun = readlineSync.prompt();

console.log("What is the verb?");

let verb = readlineSync.prompt();

console.log("What is the adjective?");

let adjective = readlineSync.prompt();

console.log("What is the adverb?");

let adverb = readlineSync.prompt();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over to the lazy dog.`);
console.log(`The ${noun} ${adverb} ${verb}ed up to ${adjective} Joe's turtle.`);