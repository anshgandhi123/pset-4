const readlineSync = require("readline-sync");

const min = 1
const MAX = Number.MAX_SAFE_INTEGER
let integer = 0
let number = 1
let numberDivided = 0
let answer = ""

console.log("");

do {
  integer = Number(readlineSync.question("Positive Integer: "));
}
while (integer <= min || integer >= MAX || !Number.isInteger(integer) || Number.isNaN(integer))

while (number <= Math.floor(Math.sqrt(integer))) {

if (number <= integer) {
  numberDivided = (integer % number)
  if (number === Math.floor(Math.sqrt(integer))) {
      answer = answer + number + ". "
}
    else if (numberDivided === 0) {
    answer = answer + number + ", " + (integer/number) + ", "
  }
  number++
}
}

console.log("\n" + answer + "\n")
