"use strict";

function countTrue(array) {
  return array.filter(value => value).length;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
