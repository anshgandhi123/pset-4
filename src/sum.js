const readlineSync = require("readline-sync");
const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER



do {
lowerBound = Number(readlineSync.question("\nLower bound: "));
}
while (((lowerBound <= MIN) && (lowerBound >= MAX))  && (!Number.isInteger(upperBound)))

  if ((lowerBound >= MIN) && (lowerBound <= MAX))  {
  let one = lowerBound
}
let sum = lowerBound

do {
upperBound = Number(readlineSync.question("Upper bound: "));
}
while (((lowerBound <= MIN) && (lowerBound >= MAX)) && (!Number.isInteger(upperBound)))
  if ((upperBound >= MIN) && (upperBound <= MAX))  {
  let sum1 = upperBound
}
let sum1 = upperBound


do {
lowerBound2 = Number(readlineSync.question("Lower bound: "));
}
while (((lowerBound2 <= MIN) && (lowerBound2 >= MAX)) && (!Number.isInteger(upperBound)))
  if ((lowerBound2 >= MIN) && (lowerBound2 <= MAX)) {
  let sum2 = lowerBound2
}
let sum2 = lowerBound2


do {
upperBound2 = Number(readlineSync.question("Upper bound: "));
}
while (((upperBound <= MIN) && (upperBound >= MAX)) && (!Number.isInteger(upperBound)))
  if ((upperBound >= MIN) && (upperBound <= MAX)) {
  let sum3 = lowerBound
}
let sum3 = upperBound2



let final = (sum + sum1 + sum2 + sum3)

console.log("\n" + final + ".");
