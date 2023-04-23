"use strict";

function findOutlier(integers) {
  let even = [];
  let odd = [];

  integers.forEach(integer => {
    if (integer % 2 === 0) {
      even.push(integer);
    } else {
      odd.push(integer);
    }
  });

  if (even.length === 1) {
    return even[0];
  } else {
    return odd[0];
  }
}

console.log(findOutlier([2, 8, 4, 3, 10, 22, 14]));
console.log(findOutlier([17, 9, 55, 9, 7, 4]));
console.log(findOutlier([4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4]));
