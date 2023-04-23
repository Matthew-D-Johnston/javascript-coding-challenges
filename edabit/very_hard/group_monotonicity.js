"use strict";

const groupMonotonic = (arr) => {
  if (arr.length <= 2) {
    return [];
  }

  let indexes = [];
  let monotonicity;

  if (arr[0] < arr[1]) {
    monotonicity = 'increasing';
  } else if (arr[0] > arr[1]) {
    monotonicity = 'decreasing';
  } else {
    monotonicity = 'constant';
  }

  for (let index = 1; index < arr.length - 1; index += 1) {
    if ((monotonicity === 'increasing' || monotonicity === 'constant') && arr[index] > arr[index + 1]) {
      monotonicity = 'decreasing';
      indexes.push(index);
    }

    if ((monotonicity === 'decreasing' || monotonicity === 'constant') && arr[index] < arr[index + 1]) {
      monotonicity = 'increasing';
      indexes.push(index);
    }

    if (arr[index] === arr[index + 1]) {
      monotonicity = 'constant';
    }
  }

  return indexes;
}

console.log(groupMonotonic([0, 1]));
console.log(groupMonotonic([0, 2, 1]));
console.log(groupMonotonic([0, 1, 1, 0]));
