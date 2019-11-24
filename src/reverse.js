const readlineSync = require("readline-sync");
const MAX = Number.MAX_SAFE_INTEGER
const MIN = 1
value = 0
console.log("");
do {
  integer = Number(readlineSync.question("Positive integer: "));
}  while(integer < MIN || integer > MAX || Number.isNaN(integer) || !Number.isInteger(integer))

while (integer > 0) {
  let number = (integer % 10)
  integer = Math.floor(integer/10)
  if (integer > 0) {
   value = value + number + ", ";
 } else {
   value = value + number + ". ";
 }

}
console.log("\n" + value + "\n");
