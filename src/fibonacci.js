const readlineSync = require("readline-sync");

const MIN = 1
const MAX = 78
let integer = 0
let base = 1.618034
let secondBase = -0.618034
console.log("");

do {
  integer = Number(readlineSync.question("Positive integer: "));
}
while (integer < MIN || integer > MAX || !Number.isInteger(integer) || Number.isNaN(integer))
let exponent = integer
let sum = (((Math.pow(base, exponent)) - (Math.pow(secondBase, exponent)))/Math.sqrt(5))

if ((sum*10) % 10 < 5){
  Math.floor(sum);
}

if ((sum*10) % 10 >= 5){
  Math.ceil(sum);
}

let finalAnswer = sum.toLocaleString("en", {minimumFractionDigits:0, maximumFractionDigits:0})
console.log("\n" + finalAnswer + "." + "\n")
