"use strict";

function difCiph(arg) {
  if (typeof arg === 'string') {
    return encodeString(arg);
  } else {
    return decodeArray(arg);
  }
}

function encodeString(str) {
  let encodedChar = str.charCodeAt(0);
  let encoded = [encodedChar];

  for (let index = 1; index < str.length; index += 1) {
    encodedChar = str.charCodeAt(index) - str.charCodeAt(index - 1);
    encoded.push(encodedChar);
  }

  return encoded;
}

function decodeArray(arr) {
  let char = String.fromCharCode(arr[0]);
  let decoded = char;

  for (let index = 1; index < arr.length; index += 1) {
    char = String.fromCharCode(arr[index] + char.charCodeAt(0));
    decoded += char;
  }

  return decoded;
}

console.log(difCiph("Hello"));
console.log(difCiph([ 72, 33, -73, 84, -12, -3, 13, -13, -68 ]));
console.log(difCiph("Sunshine"));
