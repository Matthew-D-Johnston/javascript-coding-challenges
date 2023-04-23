"use strict";

function findAllDigits(numbers) {
  let digits = [];

  for (let outerIdx = 0; outerIdx < numbers.length; outerIdx += 1) {
    let current_digits = String(numbers[outerIdx]).split('');

    for (let innerIdx = 0; innerIdx < current_digits.length; innerIdx += 1) {
      if (!digits.includes(current_digits[innerIdx])) {
        digits.push(current_digits[innerIdx]);
      }

      if (digits.length === 10) {
        return numbers[outerIdx];
      }
    }
  }

  return "Missing digits!";
}

console.log(findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]));
console.log(findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]));
console.log(findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]));
console.log(findAllDigits([]));

