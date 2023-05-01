"use strict";

const perimeter = (l, num) => {
  return l === "s" ? 4 * num : 6.28 * num;
}

console.log(perimeter("s", 7));
console.log(perimeter("c", 4));
console.log(perimeter("c", 9));