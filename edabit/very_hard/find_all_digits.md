##### Edabit > JavaScript > Very Hard

---

## Find All Digits

#### Problem

##### Instructions:

Taking each four digit number of an array in turn, return the **number** that you are on when all of the digits 0-9 have been discovered. If not all of the digits can be found, return `"Missing digits!"`.

_Notes_

The digits can be discovered in *any* order.

##### Definitions/Rules (explicit and implicit):

* Digits to be found: 0-9
* Scan 4-digit numbers given in an array.
* If not all digits can be found, return `"Missing digits!"`
* Digits can be discovered in any order.

##### Input/Output:

* Input: An array of 4-digit numbers.
* Output: either a 4-digit number or the following string `"Missing digits!"`.

##### Mental Model:

Take an array containing any number of 4-digit numbers. Iterate over the array and check each number for the digits 0-9. Collect and store any digits found, but don't store duplicates. If all ten digits are found on a particular iteration, then return the number on which the final digit(s) were discovered. If the iteration completes without returning one of the 4-digit numbers, then return the string `"Missing digits!"`.

---

#### Examples / Test Cases

```javascript
findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) ➞ 5057
// digits found:  517-  4-38  29-6  -0

findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) ➞ 3370
// digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0

findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) ➞ "Missing digits!"
// digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// 0 and 1 are missing
```

---

#### Data Structures

##### Input:

* An array of numbers.

##### Output:

* Either a number or a string.

##### Intermediate Data Structures

* Will be dealing with arrays and numbers.
* But will also need to convert numbers into strings.

---

#### Algorithm

* Declare a `digits` variable and assign it to an empty array, `[]`.
* Iterate over the given `numbers` array using a `for` loop. 
* Convert each `number` into a string and split it into individual digits.
* Store those digits in a `current_digits` variable.
* Iterate over the `current_digits` array using a `for` loop.
* On each iteration, check to see if the `digit` is included in the `digits` array.
* If it is not included, push it to the `digits` array.
* Check the length of the `digits` array.
* If it is equal to `10`, then return the current `number`.
* If after all looping is complete and no number has been returned, then return the string `"Missing digits!"`.

---

#### Code

```javascript
function findAllDigits(numbers) {
  let digits = [];

  for (let outerIdx = 0; outerIdx < numbers.length; outerIdx += 1) {
    let current_digits = String(numbers[outerIdx]).split('');

    for (let innerIdx = 0; innerIdx < current_digits.length; innerIdx += 1) {
      if (!digits.includes(current_digits[innerIdx])) {
        digits.push(current_digits[innerIdx]);
      }

      if (digits.length === 10) {
        return numbers[outerIdx];
      }
    }
  }

  return "Missing digits!";
}
```

