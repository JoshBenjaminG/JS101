twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888

function twice(num) {
  for (let i = 0; i < num.length; i++) {
    console.log(String(num[i]));
  }
}