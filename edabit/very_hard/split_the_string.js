"use strict";

const splitNCases = (str, cases) => {
  if (str.length % cases !== 0) return ["Error"];

  const increment = str.length / cases;
  const divisions = [];

  for (let index = 0; index < str.length; index += increment) {
    divisions.push(str.slice(index, index + increment));
  }

  return divisions;
}

console.log(splitNCases("Strengthened", 6));
console.log(splitNCases("Unscrupulous", 2));
console.log(splitNCases("Flavorless", 1));