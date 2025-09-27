function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

function allOddNumbers() {
  for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

allOddNumbers();

function allEvenNumbers() {
  for (let i = 1; i <= 99; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

allEvenNumbers();