let bannerTop = "";
let bannerBottom = "";
let spaces = "";

function createBanner(sentence) {
  let length = sentence.length;
  for (let i = 0; i < length; i++) {
  bannerTop += "-";
  bannerBottom += "-";
  spaces += " ";
}
let bannerRow = "|" + spaces + "|";

let finalSentence = `|${sentence}|`;

console.log(`+${bannerTop}+`);
console.log(bannerRow);
console.log(finalSentence);
console.log(bannerRow);
console.log(`+${bannerBottom}+`);
}

createBanner("To boldly go where no one has gone before.");