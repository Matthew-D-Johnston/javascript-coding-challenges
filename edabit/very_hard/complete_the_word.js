"use strict";

function canComplete(inputString, word) {
  let pattern = '[a-z]*';
  
  inputString.split('').forEach(char => {
    pattern += char + '[a-z]*';
  });

  let regex = new RegExp(pattern);

  return regex.test(word);
};

// console.log(canComplete("butl", "beautiful"));
// console.log(canComplete("butlz", "beautiful"));
// console.log(canComplete("tulb", "beautiful"));
// console.log(canComplete("bbutl", "beautiful"));
console.log(canComplete("coda", "encyclopedia"));
