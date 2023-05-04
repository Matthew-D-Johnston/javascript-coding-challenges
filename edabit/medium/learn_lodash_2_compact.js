"use strict";

function compact(arr) {
  let result = [];
  arr.forEach(el => {
    if (el) {
      result.push(el);
    }
  });

  return result;
}

console.log(compact([0, 1, false, 2, "", 3]));
