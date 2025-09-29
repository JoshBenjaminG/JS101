triangle(5);

function triangle(num) {
  for (let i = 1; i <= num; i++) {
   let line = "";

   for (let k = 0; k < num - i; k++) {
    line += " ";
   }

   for (let j = 0; j < i; j++) {
    line += "*";
   }
  console.log(line);
  }
}