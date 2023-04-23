##### Edabit > JavaScript > Very Hard

---

## Difference Cipher

#### Problem

##### Instructions:

It's time to send and receive secret messages.

Create a single function that takes a string **or** an array and returns a coded or decoded message.

The first letter of the string, or the first element of the array represents the Character Code of that letter. The next elements are the differences between the characters: e.g. `A` +3 --> `C` or `z` -1 --> `y`.

_Notes_

The input of the function will always be a string **or** an array with numbers.

##### Definitions/Rules (explicit and implicit):

* First letter of string or first element of the array represents the Character Code of that letter.
* The next elements are the differences between the characters.
* 

##### Input/Output:

* Input: either a string or an array of numbers.

##### Mental Model:

Determine whether the argument passed to the function is an array or a string. If it is a string, obtain the Character Code of the first character. Store that code in an array. Then find the Character Code of the next character, subtract the previous Character Code from the current one and store the difference in the array. Continue until all characters have been accounted for. Return the array. If the input argument is an array, find the character that has the code found in the first element of the array. Append that character to an empty string. Add the next element to the previous one and find the character with that code. Append the character to the string. Return the string.

---

#### Examples / Test Cases

```javascript
difCiph("Hello") ➞ [72, 29, 7, 0, 3]
// H = 72, the difference between the H and e is 29 (upper- and lowercase).
// The difference between the two l's is obviously 0.

difCiph([ 72, 33, -73, 84, -12, -3, 13, -13, -68 ]) ➞ "Hi there!"

difCiph("Sunshine") ➞ [83, 34, -7, 5, -11, 1, 5, -9]
```

---

#### Data Structures

##### Input:

* Either a string of characters or an array of numbers.

##### Output:

* A decoded string of characters or an encoded array of numbers.

---

#### Algorithm

* Create two helper functions to be executed within the main `difCiph` function.
* One function will take a string and convert to an array of numbers: `encodeString`
  * Find the character code of the first character of the string, and store in a variable called `encodedChar`.
  * Declare an `encoded` variable and set it equal to an array containing the Character Code of the first letter.
  * create a `for` loop to loop over each of the remaining characters in the string.
  * Within the loop, subtract the `encodedChar` from the Character Code of the current character and store it as `encodedChar`.
  * push the `encodedChar` to the `encoded` array.
  * After the loop has finished, return `encoded`
* The other function will take an array of numbers and convert to a string: `decodeArray`
  * Take the first element of the array and use the number as the Character Code to find the corresponding character, and store in a variable called `char`.
  * Declare a `decoded` variable and set it equal to `char`.
  * Start a `for` loop to loop over the remaining elements of the array starting with the element at index `1`.
  * Sum the number at the current index and the one before it and use that number as a Character Code to find a corresponding character.
  * Append that character to the `decoded` string.
  * Outside the loop, return `decoded`.
* In the main `difCiph` function check to see if the `arg` is a string using `typeof`.
* If it is a string, then execute the `encodeString` function.
* Otherwise, execute the `decodeArray` function.

---

#### Code

```javascript
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
```

