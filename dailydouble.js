crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

function crunch(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      newString += string[i];
    }
  }
  console.log(`"${newString}"`);
}