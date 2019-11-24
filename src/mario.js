const readlineSync = require("readline-sync");
let min = 1
let max = 24
let height = 0
let secondHashtags = 0
let lengthofRow = 0
let answer = "\n";
let space = 1;
let hashtag = 1;

console.log();

do {
  height = Number(readlineSync.question("Height: "));
} while (height < min || height > max || !Number.isInteger(height) || Number.isNaN(height));
secondHashtags = 2
lengthOfRow = height + 1

for (let value = 0; value < height; value++) {

  while (space <= lengthOfRow - secondHashtags) {
    answer = answer + " ";
    space++;
  }

  while (hashtag <= secondHashtags) {
    answer = answer + "#";
    hashtag++;
  }

  console.log(answer);
  secondHashtags++;
  answer = "";
  space = 1;
  hashtag = 1;
}

console.log();
