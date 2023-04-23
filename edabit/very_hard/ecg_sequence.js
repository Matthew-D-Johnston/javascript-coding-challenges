"use strict";

function ecgSequenceIndex(int) {
  let sequence = [1, 2];

  while (sequence[sequence.length - 1] !== int) {
    let nextSeqNumber = 3;
    let seqLength = sequence.length;

    while (sequence.length === seqLength) {
      if (!sequence.includes(nextSeqNumber) && sharesFactor(sequence[sequence.length - 1], nextSeqNumber)) {
        sequence.push(nextSeqNumber);
      } else {
        nextSeqNumber += 1;
      }
    }
  }

  return sequence.indexOf(int);
}

function sharesFactor(int1, int2) {
  let factor = 2;

  while (factor <= int1 && factor <= int2) {
    if ((int1 % factor === 0) && (int2 % factor === 0)) {
      return true;
    }
    
    factor += 1;
  }

  return false;
}

console.log(ecgSequenceIndex(3));
console.log(ecgSequenceIndex(5));
console.log(ecgSequenceIndex(7));
