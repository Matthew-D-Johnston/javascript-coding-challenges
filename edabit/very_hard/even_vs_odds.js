"use strict";

const availableSpots = (nums, num) => {
  const even = num % 2 === 0;
  let likedSpots = 0;

  for (let idx = 0; idx < nums.length - 1; idx++) {
    let leftNeighbour = nums[idx];
    let rightNeighbour = nums[idx + 1];

    if (even) {
      if (leftNeighbour % 2 === 0 || rightNeighbour % 2 === 0) {
        likedSpots += 1;
      }
    } else {
      if (leftNeighbour % 2 === 1 || rightNeighbour % 2 === 1) {
        likedSpots += 1;
      }
    }
  }

  return likedSpots;
}

console.log(availableSpots([0, 4, 6, 8], 9));
console.log(availableSpots([0, 4, 6, 8], 12));
console.log(availableSpots([4, 4, 4, 4, 5], 7));
console.log(availableSpots([4, 4], 8));