const readlineSync = require("readline-sync");
const min = 0
const MAX = Number.MAX_SAFE_INTEGER
console.log("");
let sum = 0
average = 0
do {
  integer = Number(readlineSync.question("Non-negative integer: "));
  if (integer >= 0 && integer < MAX && !Number.isNaN(integer)) {
    sum = integer + sum
    average = average + 1
  }
}
while ((integer >= 0 && integer < Number.MAX_SAFE_INTEGER &&  integer % 1 == 0) || Number.isNaN(integer))
let answer = (sum/average)
let final = Math.round(100*answer)/(100)
let finalAnswer = final.toLocaleString("en", {minimumFractionDigits:3, maximumFractionDigits:3})
console.log("\n" + finalAnswer + "." + "\n")
