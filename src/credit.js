const readlineSync = require("readline-sync");
let MIN = 1000000000000
let MAX = 9999999999999999
let add = 1
let number = 0
let addedValue = 0
let secondNumber = 0
let sum = 0
let digitOne = 0
let digitTwo = 0
let integer = 0
let digit = 0
console.log();

do {
  number = Number(readlineSync.question("Number: "));
} while (number < MIN || number > MAX || Number.isNaN(number) || !Number.isInteger(number))

secondNumber = number

while (secondNumber >= 1) {
  secondNumber = secondNumber / 10
  digit += 1
}
digitOne = Math.floor(number / 10 ** (digit - 1))
digitTwo = (Math.floor(number / 10 ** (digit - 2)) / 10) * 10

for (let value = 0; value < digit; value++) {
  integer = (number - Math.floor(number / 10) * 10)
  number = Math.floor(number / 10)
  if (value % 2 == 1) {
    if (integer * 2 >= 10) {
      addedValue += ((integer * 2 - integer * 2 % 10) / 10 + integer * 2 % 10)
    }
    else if (integer * 2 < 10) {
      addedValue += (integer * 2)
    }
  }
  else {
    addedValue += integer
  }
  add += 1
}

if (addedValue / 10 % 1 !== 0) {
  console.log("\nInvalid.")
}
else if (digit === 15 && (digitTwo === 34 || digitTwo === 37)) {
  console.log("\nAmex.")
}
else if (digit === 16 && (digitTwo <= 55 && digitTwo >= 51)) {
  console.log("\nMastercard.")
}
else if ((digit === 13 || digit === 16) && digitOne === 4) {
  console.log("\nVisa.")
}
