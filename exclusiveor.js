const { boolean } = require("joi");

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true

function xor(arg1, arg2) {
  if (arg1 || arg2) {
    return true;
  } else {
    return false;
  }
}

