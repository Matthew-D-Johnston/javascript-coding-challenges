"use strict";

function sunLoungers(str) {
  if (str.length <= 2) {
    if (/1/.test(str)) {
      return 0;
    } else {
      return 1;
    }
  }

  let starting_num_of_ones = /1/.test(str) ? str.match(/1/g).length : 0;
  
  let chars = str.split('');

  if (chars[0] === '0' && chars[1] === '0') {
    chars[0] = '1'
  }

  for (let index = 1; index < chars.length - 1; index += 1) {
    if (chars[index] === '0' && chars[index - 1] === '0' && chars[index + 1] === '0') {
      chars[index] = '1';
    }
  }

  if (chars[chars.length - 1] === '0' && chars[chars.length - 2] === '0') {
    chars[chars.length - 1] = '1';
  }

  let ending_string = chars.join('');
  let ending_num_of_ones = ending_string.match(/1/g).length;

  return ending_num_of_ones - starting_num_of_ones;
}

console.log(sunLoungers("10001"));
console.log(sunLoungers("00101"));
console.log(sunLoungers("0"));
console.log(sunLoungers("000"));
