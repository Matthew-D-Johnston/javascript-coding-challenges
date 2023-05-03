"use strict";

const tetra = (num) => {
  if (num === 1) {
    return 1;
  }

  let base = 0;

  for (let i = 1; i <= num; i += 1) {
    base += i;
  }

  return base + tetra(num - 1);
}

console.log(tetra(2));
console.log(tetra(5));
console.log(tetra(6));
