##### Edabit > JavaScript > Very Hard

---

## The ECG Sequence

#### Problem

##### Instructions:

In the ECG Sequence (that always starts with the numbers 1 and 2), every number that succeeds is the smallest not already present in the sequence and that shares a factor (excluding 1) with its preceding number. Every number in the ECG Sequence (besides 1 and 2) has a different index from its natural index in a normal numeric sequence. See the example below to establish the ECG Sequence Index of number 3.

```
// Find the smallest number that is not in sequence...
// This number shares a factor with the preceding?

SEQUENCE = [1, 2]

3 = no factors shared with 2
4 = shares factor 2 with number 2

SEQUENCE = [1, 2, 4]

3 = no factors shared with 4
5 = no factors shared with 4
6 = shares factor 2 with number 4

SEQUENCE = [1, 2, 4, 6]

3 = shares factor 3 with number 6

SEQUENCE = [1, 2, 4, 6, 3]

Number 3 is at index 4 in the ECG Sequence.
```

Given an integer `n` implement a function that returns its ECG Sequence Index.

_Notes_

- ECG is the acronym for the electrocardiogram: if you try to graphically represent the trend of the sequence, a similar scheme appears.
- Curiosity: every odd prime `p` in the sequence is preceded by `2p` and followed by `3p`.

##### Definition/Rules (explicit and implicit):

* The ECG Sequence always starts with the numbers 1 and 2.
* Succeeding numbers do not already appear in the sequence.
* They are the smallest number not already present in the sequence and which share a factor (excluding 1) with its preceding number.
* Factor: a number that easily divides into another number with no remainder.
* 

##### Input/Output:

* Input: an integer that belongs in the ECG Sequence.
* Output: the ECG Sequence index of that number.

##### Mental Model:

Take the given number. Find the ECG Sequence up until that number. Do this starting with the number 3. Check to see if that number is already included in the sequence. If not, check to see if it has a common factor with the preceeding number in the sequence. If not, move on to the number that is 1 higher than the current number. If it does share a common factor, then add that number to the sequence. If the number added to the sequence is the given input number, then find its index and return that index. If it is not the given input number, then go back to three and repeat the process.

---

#### Examples / Test Cases

```javascript
ecgSeqIndex(3) ➞ 4

ecgSeqIndex(5) ➞ 9

ecgSeqIndex(7) ➞ 13
```

---

#### Data Structures

##### Input:

* An integer.

##### Output:

* An integer.

##### Intermediate Data Structures

* Arrays => the sequence.
* Integers.

---

#### Algorithm

* Create a `sharesFactor` function that determines if two numbers share a common factor.

  * Two inputs: `int1` and `int2`.
  * Declare a `factor` variable and set it equal to `2`
  * Initiate a `while` loop with the condition `factor <= int1 && factor <= int2`
  * Within the loop, if `(int1 % factor === 0) && (int2 % factor === 0)` then return true.
  * increment the `factor` variable by `1`.
  * After the loop finishes, return `false`.

* Declare a `sequence` variable and set it equal to `[1, 2]`.

* Initiate a `while` loop with the condition `sequence[sequence.length - 1] !== int`

  * Declare a `nextSeqNumber` and set it equal to `3`.
  * Declare a `seqLength` variable and set it equal to `sequence.length`

  * Initiate a `while` loop with the condition `sequence.length === seqLength`
    * if the `nextSeqNumber` is not already included in the `sequence` array and the `nextSeqNumber` shares a common factor with the preceeding number in the `sequence` array, then append the `nextSeqNumber` to the end of the `sequence` array.
    * Otherwise, increment the `nextSeqNumber` by `1`.

* Find the index of the given `int` and return it.

---

#### Code

```javascript
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
```

