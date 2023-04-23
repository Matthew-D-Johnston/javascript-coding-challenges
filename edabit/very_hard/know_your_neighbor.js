"use strict";

function plusSign(chars) {
  let regex = new RegExp('([^+][a-z])|([a-z][^+])|^[a-z]|[a-z]$', 'gi');
  return !regex.test(chars);
}

console.log(plusSign("+f+d+c+#+f+"));
console.log(plusSign("+d+=3=+s+"));
console.log(plusSign("f++d+g+8+"));
console.log(plusSign("+s+7+fg+r+8+"));

