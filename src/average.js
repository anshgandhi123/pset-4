const readlineSync = require("readline-sync");
const min = 0
const MAX = Number.MAX_SAFE_INTEGER
console.log("");
let sum = 0
average = 0
do {
  integer = Number(readlineSync.question("Non-negative integer: "));
}
while (integer > MAX || Number.isNaN(integer) || !Number.isInteger(integer) || integer >= 0)

if (integer !== -1) {
  sum = integer + sum
  average = average + 1
}
answer = (sum/average)
let final = Math.round(100*answer)/(100)
let finalAnswer = final.toLocaleString("en", {minimumFractionDigits:3, maximumFractionDigits:3})
console.log("\n" + finalAnswer + "\n")
