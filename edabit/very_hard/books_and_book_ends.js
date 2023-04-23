"use strict";

function countUniqueBooks(sequence, bookend) {
  let splitSequence = sequence.split(bookend);
  let bookGroups = []

  for (let index = 1; index < splitSequence.length; index += 2) {
    bookGroups.push(splitSequence[index]);
  }

  let uniqueChars = [];

  bookGroups.forEach(group => {
    group.split('').forEach(char => {
      if (!uniqueChars.includes(char)) {
        uniqueChars.push(char);
      }
    });
  });

  return uniqueChars.length;
}

console.log(countUniqueBooks("AZYWABBCATTTA", "A"));
console.log(countUniqueBooks("$AA$BBCATT$C$$B$", "$"));
console.log(countUniqueBooks("ZZABCDEF", "Z"));
