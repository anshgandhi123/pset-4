const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let integer = 0;
let value = 1;
let factors = "\n";
console.log()

do{
  integer = Number(readlineSync.question("Positive integer: "));
} while (integer < MIN || integer > MAX || !Number.isInteger(integer) || Number.isNaN(integer))

if (Math.sqrt(integer) % 1 == 0) {
 number = Math.sqrt(integer) + 1
}
else {
 number = Math.sqrt(integer)
}

while (value < number) {
  if ((integer / value) % 1 == 0) {
    if (integer / value == value) {
      factors += String(value);
      if (value < Math.sqrt(integer) - 1) {
        factors += ", "
      }
      else {
        factors += "."
      }
    }
    else {
      factors += String(value) + ", " + String(integer/value)
      if (value < Math.sqrt(integer)-1) {
        factors += ", "
      }
      else {
        factors += "."
      }
    }
  }
  value += 1
}
console.log(factors + "\n")
