"use strict";

function zeroesToEnd(nums) {
  let startPointer = 0;
  let endPointer = nums.length - 1;

  while (nums[endPointer] === 0) {
    endPointer -= 1;
  }

  while (startPointer < endPointer) {
    if (nums[startPointer] === 0) {
      nums.splice(startPointer, 1);
      nums.push(0);
      endPointer -= 1;
    } else {
      startPointer += 1;
    }
  }

  return nums;
}

console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]));
console.log(zeroesToEnd([0, 0, 2, 0, 5]));
console.log(zeroesToEnd([4, 4, 5]));
console.log(zeroesToEnd([0, 0]));

