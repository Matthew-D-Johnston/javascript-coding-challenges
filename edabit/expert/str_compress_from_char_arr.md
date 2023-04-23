##### Edabit > JavaScript > Expert

---

## String Compression from Character Array

#### Problem

##### Instructions:

The function is given an array of characters. Compress the array into a string using the following rules. For each group of consecutively repeating characters:

- If the number of repeating characters is one, append the string with only this character.
- If the number `n` of repeating characters `x` is greater than one, append the string with `"x" + n`.

##### Definitions/Rules (explicit and implicit):

* If the character has only one instance (i.e. does not repeat), then simply append that character to the result string.
* If the character repeats itself, append the character and the number of instances in a row of that character.

##### Input/Output:

* Input: an array of characters.
* Output: A string representing the characters and the number of repetitions of each character.

##### Mental Model:

Take the given array. Iterate over each character. If the current character matches the next character, then store the current character in a string of repeating characters. If it does not, then append the character to the repeating characters string. Count the characters in the string and append the character and the count to the result string. Then clear the repeating characters string.

---

#### Examples / Test Cases

```javascript
Examples
compress(["t", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "s", "s", "s", "h"])
// => "te14s3h"

compress(["a", "a", "b", "b", "c", "c", "c"])
// => "a2b2c3"

compress(["a"])
// => "a"

compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
// => "ab12"

compress(["a", "a", "a", "b", "b", "a", "a"])
// => "a3b2a2"
```

---

#### Data Structures

##### Input:

* An array of strings.

##### Output:

* A string.

---

#### Algorithm

* Declare a `result` variable and assign it to `''`.
* Declare a `repeatingChars` variable and assign it to `''`.
* Start a `for` loop with `index = 0`, `index < arr.length`, and `index += 1`.
* Make an `if` conditional for the case where the `index === arr.length - 1`
  * append the current element of the array to the `repeatingChars` string.
  * Count the length of the `repeatingChars` string.
  * if it is 1, then append the current element to the `result` string.
  * Otherwise, append the current element and the count to the `result` string.
* The `else` part of the conditional
  * if the current element is equal to the next element
    * append the current element to the `repeatingChars` string
    * Continue to the next iteration
  * else
    * Append the current element to the `repeatingChars` string
    * Find the length of the `repeatingChars`
    * If the length is 1, then append the current element to the `result` string.
    * Otherwise, append the current element and the count to the `result` string.

---

#### Code

```javascript
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
```

Refactored solution:

```javascript
function compress(chars) {
  let result = '';
  let repeatingChars = '';

  for (let index = 0; index < chars.length; index += 1) {
    let currentChar = chars[index];
    let count;

    if ((index === chars.length - 1) || (currentChar !== chars[index + 1])) {
      repeatingChars += currentChar;
      count = repeatingChars.length;

      if (count === 1) {
        result += currentChar;
      } else {
        result += `${currentChar}${count}`;
      }

      repeatingChars = '';
    } else {
      repeatingChars += currentChar;
    }
  }

  return result;
}
```

Both solutions pass the examples / test cases above. However, they are failing some of Edabit's tests. I can't figure out why.