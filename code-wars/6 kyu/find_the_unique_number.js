"use strict";

// function findUniq(numbers) {
//   numbers.sort();

//   let first = numbers.shift();
//   let last = numbers.pop();

//   if (numbers.includes(first)) {
//     return last;
//   } else {
//     return first;
//   }
// }

// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([0, 0, 0.55, 0, 0]));
// console.log(findUniq([1000, 3, 3, 3, 3, 3, 3, 3]));
// console.log(findUniq([9.7, 9.7, 9.7, 9.7, -4.3, 9.7, 9.7]));

// refactored solution

function findUniq(numbers) {
  numbers.sort();

  let first = numbers.shift();
  let last = numbers.pop();

  return numbers.includes(first) ? last : first;
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([1000, 3, 3, 3, 3, 3, 3, 3]));
console.log(findUniq([9.7, 9.7, 9.7, 9.7, -4.3, 9.7, 9.7]));
