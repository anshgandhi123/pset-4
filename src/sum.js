const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER
let sum = 0
i = 0
console.log("");
do {
lowerBound = Number(readlineSync.question("Lower bound: "));
upperBound = Number(readlineSync.question("Upper bound: "));
lowerBound2 = Number(readlineSync.question("Lower bound: "));
upperBound2 = Number(readlineSync.question("Upper bound: "));
}
while (lowerBound >= MIN &&
       lowerBound <= MAX &&
       upperBound >= MIN &&
       upperBound <= MAX &&
       !Number.isInteger(lowerBound) &&
       !Number.isInteger(upperBound) &&
       lowerBound > upperBound &&
       lowerBound2 >= MIN &&
              lowerBound2 <= MAX &&
              upperBound2 >= MIN &&
              upperBound2 <= MAX &&
              !Number.isInteger(lowerBound2) &&
              !Number.isInteger(upperBound2) &&
              lowerBound2 > upperBound2);

for (let i = lowerBound; i <= upperBound; i++) {
   if (i % 2 === 0) {
      for (i = lowerBound; i <= upperBound; i+=2) {
        sum = i + sum
      }
    }
        if (i % 2 !== 0) {
            for (i = lowerBound + 1; i <= upperBound; i+=2) {
     sum = i + sum
}
  }
}

for (let i = lowerBound2; i <= upperBound2; i++) {
   if (i % 2 === 0) {
      for (i = lowerBound2; i <= upperBound2; i+=2) {
        sum2 = i + sum
      }
    }
        if (i % 2 !== 0) {
            for (i = lowerBound2 + 1; i <= upperBound2; i+=2) {
     sum2 = i + sum
}
  }
}

let sum3 = (sum+sum2)
let finalSum = sum3.toLocaleString('en');

console.log("\n" + finalSum + ".");
