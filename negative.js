negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
negative(12);

function negative(num) {
  let string = num.toString();
  if (string[0] !== "-") {
    console.log(Number("-" + string));
  } else {
    console.log(num);
  }
}