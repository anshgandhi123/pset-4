const readlineSync = require("readline-sync");
const MIN = 0
const MAX = Number.MAX_SAFE_INTEGER
console.log("");
let sum = 0
average = 0
do {
  integer = Number(readlineSync.question("Non-negative integer: "));
  if (integer >= MIN && integer < MAX && !Number.isNaN(integer) && integer % 1 == 0) {
    sum = integer + sum
    average = average + 1
  }
}
while ((integer >= 0 && integer < MAX &&  integer % 1 == 0) || Number.isNaN(integer) || average == 0)
let answer = (sum/average)
let final = Math.round(100*answer)/(100)
let finalAnswer = final.toLocaleString("en", {minimumFractionDigits:3, maximumFractionDigits:3})
console.log("\n" + finalAnswer + "." + "\n")
