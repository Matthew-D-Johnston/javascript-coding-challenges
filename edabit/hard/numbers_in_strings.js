"use strict";

const numInStr = (arr) => {
  let regex = /\d/;
  let result = [];

  arr.forEach(str => {
    if (regex.test(str)) {
      result.push(str);
    }
  });

  return result;
}

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));
