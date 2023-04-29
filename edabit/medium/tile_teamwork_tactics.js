"use strict";

const possibleBonus = (num1, num2) => {
  const difference = num2 - num1;

  if (difference > 0 && difference <= 6) {
    return true;
  }

  return false;
}

console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));
