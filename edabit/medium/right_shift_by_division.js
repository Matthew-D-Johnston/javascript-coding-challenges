"use strict";

function shiftToRight(dividend, n) {
  return Math.floor(dividend / (2**n));
}

console.log(shiftToRight(80, 3));
console.log(shiftToRight(-24, 2));
console.log(shiftToRight(-5, 1));