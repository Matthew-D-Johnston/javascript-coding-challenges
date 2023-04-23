"use strict";

function compress(chars) {
  let result = '';
  let repeatingChars = '';

  for (let index = 0; index < chars.length; index += 1) {
    let currentChar = chars[index];
    let count;

    if (index === chars.length - 1) {
      repeatingChars += currentChar;
      count = repeatingChars.length;

      if (count === 1) {
        result += currentChar;
      } else {
        result += `${currentChar}${count}`;
      }
    } else {
      if (currentChar === chars[index + 1]) {
        repeatingChars += currentChar;
      } else {
        repeatingChars += currentChar;
        count = repeatingChars.length;

        if (count === 1) {
          result += currentChar;
        } else {
          result += `${currentChar}${count}`;
        }

        repeatingChars = '';
      }
    }
  }

  return result;
}

// refactored


// function compress(chars) {
//   let result = '';
//   let repeatingChars = '';

//   for (let index = 0; index < chars.length; index += 1) {
//     let currentChar = chars[index];
//     let count;

//     if ((index === chars.length - 1) || (currentChar !== chars[index + 1])) {
//       repeatingChars += currentChar;
//       count = repeatingChars.length;

//       if (count === 1) {
//         result += currentChar;
//       } else {
//         result += `${currentChar}${count}`;
//       }

//       repeatingChars = '';
//     } else {
//       repeatingChars += currentChar;
//     }
//   }

//   return result;
// }

console.log(compress(["t", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "s", "s", "s", "h"]));
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]));
console.log(compress(["a", "a", "a", "b", "b", "a", "a"]));

