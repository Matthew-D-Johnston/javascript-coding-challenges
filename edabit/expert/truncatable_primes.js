"use strict";

const truncatable = (int) => {
  let stringInteger = String(int);

  if (/0/.test(stringInteger)) { return false }

  let leftSubIntegers = leftSubIntegersArray(stringInteger);
  let rightSubIntegers = rightSubIntegersArray(stringInteger);
  
  let isLeftTruncatable = true;
  leftSubIntegers.forEach(subInteger => {
    if (!isPrime(subInteger)) {
      isLeftTruncatable = false;
    }
  });

  let isRightTruncatable = true;
  rightSubIntegers.forEach(subInteger => {
    if (!isPrime(subInteger)) {
      isRightTruncatable = false;
    }
  });

  if (isLeftTruncatable && isRightTruncatable) {
    return "both";
  } else if (isLeftTruncatable && !isRightTruncatable) {
    return "left";
  } else if (!isLeftTruncatable && isRightTruncatable) {
    return "right";
  } else {
    return false;
  }
}

const isPrime = (int) => {
  if (int === 1) { return false }

  let divisor = 2;

  while (divisor <= int / 2) {
    if (int % divisor === 0) {
      return false
    }

    divisor += 1;
  }

  return true
}

const leftSubIntegersArray = (stringInteger) => {
  let leftSubIntegers = [];
  let leftIndex = 0;

  while (leftIndex < stringInteger.length) {
    let subInteger = Number(stringInteger.slice(leftIndex));
    leftSubIntegers.push(subInteger);
    leftIndex += 1;
  }

  return leftSubIntegers;
}

const rightSubIntegersArray = (stringInteger) => {
  let rightSubIntegers = [];
  let rightIndex = stringInteger.length;

  while (rightIndex > 0) {
    let subInteger = Number(stringInteger.slice(0, rightIndex));
    rightSubIntegers.push(subInteger);
    rightIndex -= 1;
  }

  return rightSubIntegers;
}

console.log(truncatable(9137));
console.log(truncatable(5939));
console.log(truncatable(317));
console.log(truncatable(5));
console.log(truncatable(139));
console.log(truncatable(103));
