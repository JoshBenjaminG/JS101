stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

function stringy(num) {
  let string = "";
  if (num % 2 === 0) {
    for (let i = 0; i < num / 2; i++) {
          string += "10";
    }
  } else {
    for (let i = 0; i < num / 2; i++) {
          string += "10";        
    }
    string = string.slice(0, -1);
  }
  console.log(string);
}