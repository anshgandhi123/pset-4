const readlineSync = require("readline-sync");
const MAX = Number.MAX_SAFE_INTEGER
const min = 0
let value = 2

console.log("");

do {
  integer = Number(readlineSync.question("Non-negative integer: "));
}  while(integer < min || integer > MAX || Number.isNaN(integer) || !Number.isInteger(integer))


while (value < integer) {
    if (integer % value === 0 && value !== integer) {
    console.log("\nNot prime.\n")
    break;
  }
    else if (integer % value !== 0) {
      value++
    }
    else {
      break;
    }
  }
  if (integer == 1) {
    console.log("\nNot prime.\n")
  }
    else if (value >= integer) {
    console.log("\nPrime.\n")
  }
