##### Edabit > JavaScript > Very Hard

---

## Sun Loungers

#### Problem

##### Instructions:

A long stretch of beach is represented by a string of two characters `0` - free, `1` - occupied. Due to recent restrictions, a new person cannot take place next to another. There has to be one free place between two people lounging on the beach. Create a function to compute how many new people at most can settle in on the given beach.

##### Definitions/Rules (explicit and implicit):

* A `0` represents a free spot.
* A `1` represents an occupied spot.
* `1`s cannot be beside each other; there always has to be a free space

##### Input/Output:

* Input: a string of ones and zeros representing a long stretch of beach.
* Output: an integer indicating how many new people at most can settle in on the given beach.

##### Mental Model:

Take the given string. Count the number of ones in the string. Check to see if the first two characters are zeros. If so, replace the first character with a 1. Then iterate over each character of the string starting at index 1 and going to the second last index. For each current character, check to see if it is a 0. If it is not, just continue on to the next character. However, if it is a 0, check to see if its two neighbours are also zero. If they are, then replace the current character with a 1; otherwise, just move on to the next character. After the loop has completed. Check to see if the last two characters are zeros. If so, replace the last character with a 1. Count the number of 1s again. Take this number and subtract the total number of ones found at the start. Return the result.

---

#### Examples / Test Cases

```javascript
sunLoungers("10001") ➞ 1
// Can take place in the middle.

sunLoungers("00101") ➞ 1
// Can take place on the left.

sunLoungers("0") ➞ 1
// Can take one place.

sunLoungers("000") ➞ 2
// Can take places on the left and on the right.
```

---

#### Data Structures

##### Input:

* A string.

##### Output:

* An integer.

---

#### Algorithm

* Declare a `starting_num_of_ones` and set it equal to the number of 1s in the string.
* Declare a `chars` variable and set it equal to an array of the individual characters in the string.
* If the first two characters of the array are zeros, replace the first character with a 1.
* Iterate over the characters using a `for` loop starting at index `1` and up to the second last index, or `index <= chars.length - 2` (or `index < chars.length - 1`)
* Check if `chars[index] === 0 && chars[index - 1] === 0 && chars[index + 1] === 0`:
  * if so, replace `chars[index]` with a `1`.
  * if not, continue on.
* After the loop is finished, check to see if the last two characters of the array are zeros, and if so, replace the last character with a `1`.
* Declare an `ending_string` variable and set it equal to a string representation of the `chars` array.
* Declare an `ending_num_of_ones` variable and set it equal to the number of 1s in the `ending_string` variable.
* return `ending_num_of_ones - starting_num_of_ones`

---

#### Code

```javascript
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
```

