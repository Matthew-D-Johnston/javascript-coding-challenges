##### Edabit > JavaScript > Very Hard

---

## Complete the Word

#### Problem

##### Instructions:

An input string can be completed if additional letters can be added and no letters need to be taken away to match the word. Furthermore, the order of the letters in the input string must be the same as the order of letters in the final word.  

Create a function that, given an input string, determines if the word can be completed.

_Notes_

Both string input and word will be lowercased.

##### Definitions/Rules (explicit and implicit):

* Valid input string:
  * additional letters can be added
  * no letters need to be taken away
  * order of the letters must be the same as the order of letters in the final word
* Both string input and word are lowercased.

##### Input/Output:

* Input: a string of letters and a word.
* Output: `true` if the string of letters constitutes a valid input string; `false` otherwise.

##### Mental Model:

Take the input string and construct a regex pattern out of it. See if the regex pattern matches the word. If it does, return `true`. Otherwise, return `false`.

---

#### Examples / Test Cases

```javascript
canComplete("butl", "beautiful") ➞ true
// We can add "ea" between "b" and "u", and "ifu" between "t" and "l".

canComplete("butlz", "beautiful") ➞ false
// "z" does not exist in the word beautiful.

canComplete("tulb", "beautiful") ➞ false
// Although "t", "u", "l" and "b" all exist in "beautiful", they are incorrectly ordered.

canComplete("bbutl", "beautiful") ➞ false
// Too many "b"s, beautiful has only 1.
```

---

#### Data Structures

##### Inputs:

* A string of letters.
* A string representing a word.

##### Output:

* A boolean.

---

#### Algorithm

* Declare a `pattern` variable and assign it to the string, `[a-z]*`.
* Split the `inputString` into individual characters.
* Iterate over each character, append each character followed by `[a-z]*` to the `pattern` string.
* Once the iteration is complete, declare a `regex` variable and assign it to `new RegExp(pattern)`
* Then test whether the word matches the `regex` and return the result. Use `regex.test(word)`.

---

#### Code

```javascript
function canComplete(inputString, word) {
  let pattern = '[a-z]*';
  
  inputString.split('').forEach(char => {
    pattern += char + '[a-z]*';
  });

  let regex = new RegExp(pattern);

  return regex.test(word);
};
```

