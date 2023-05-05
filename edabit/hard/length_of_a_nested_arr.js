"use strict";

const getLength = (arr) => {
  return recursiveLength(arr, 0);
};

const recursiveLength = (arr, count) => {
  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i += 1) {
    let el = arr[i];

    if (Array.isArray(el)) {
      count = recursiveLength(el, count)
    } else {
      count += 1;
    }
  }

  return count;
}

console.log(getLength([1, [2, 3]]));
console.log(getLength([1, [2, [3, 4]]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
console.log(getLength([1, [2], 1, [2], 1]));
