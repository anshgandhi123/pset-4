const readlineSync = require("readline-sync");
const min = 0
const MAX = Number.MAX_SAFE_INTEGER
console.log("");
let sum = 0
x = 0
do {
  integer = Number(readlineSync.question("Non-negative integer: "));
}  while(integer > MAX || Number.isNaN(integer) || !Number.isInteger(integer) || integer >= 0)

if (integer !== -1) {
  integer = integer + sum
  x = x + 1
}
answer = integer/x

console.log("\n" + answer + "\n")
