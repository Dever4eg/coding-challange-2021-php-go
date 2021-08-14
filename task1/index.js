import verify from "./verify.js";

const min = 123117;
const max = 733395;

let count = 0;
for (let i = min; i <= max; i++) {
  if (verify(i)) {
    count++;
  }
}

console.log(`Combinations count: ${count}`);
