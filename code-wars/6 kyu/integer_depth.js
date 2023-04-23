"use strict";

function computeDepth(int) {
  let digits = [];
  let depth = 0;

  while (digits.length < 10) {
    depth += 1;
    let multiple = int * depth;

    String(multiple).split('').forEach(digit => {
      if (!digits.includes(Number(digit))) {
        digits.push(Number(digit));
      }
    });
  }

  return depth;
}

console.log(computeDepth(42));
console.log(computeDepth(1));
