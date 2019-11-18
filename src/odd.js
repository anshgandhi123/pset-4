const readlineSync = require("readline-sync");
const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER
value = 0
console.log("");
do {
  integer = Number(readlineSync.question("Positive integer: "));
}  while(integer < 0 || integer > MAX || Number.isNaN(integer) || !Number.isInteger(integer))

while (integer > 0) {
  integer = (integer %2 !=0)
  integer = Math.floor(integer/10)
   value = value + number + ".";
 }

console.log("\n" + value + "\n");
