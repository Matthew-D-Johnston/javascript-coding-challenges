"use strict";

function pyramidHeight(n) {
  let layers = 0;

  while (n >= 0) {
    n -= (layers * layers);
    layers += 1;
  }

  if (n < 0) {
    layers -= 2;
  }

  return layers;
}


console.log(pyramidHeight(0));
console.log(pyramidHeight(4));
console.log(pyramidHeight(5));
console.log(pyramidHeight(13));
console.log(pyramidHeight(14));
console.log(pyramidHeight(30));
console.log(pyramidHeight(31));
