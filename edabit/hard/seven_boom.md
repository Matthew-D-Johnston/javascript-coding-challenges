##### Edabit > JavaScript > Hard

---

## Seven Boom!

#### Problem

##### Instructions:

Create a function that takes an array of numbers and return `"Boom!"` if the digit 7 appears in the array. Otherwise, return `"there is no 7 in the array"`.

##### Definitions/Rules (explicit and implicit):

* Array contains numbers.
* Each number is composed of at least one digit.

##### Input/Output:

* Input: an array of numbers.
* Output: Either `"Boom"!` or `"there is no 7 in the array"`.

##### Mental Model:

Take the array. Iterate over each element and check to see if the element contains a seven as one of its digits. If it does, then return `"Boom!"`. Otherwise, return `"there is no 7 in the array"`.

---

#### Examples / Test Cases

```javascript
sevenBoom([1, 2, 3, 4, 5, 6, 7]);
// "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]);
// "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]);
// "Boom!"
// 97 contains the number seven.
```

---

#### Data Structures

##### Input:

* An array of integers.

##### Output:

* A string.

---

#### Algorithm

* Iterate over the given array.
* For each element, create an array of its digits.
* Check to see if a string value of `'7'` is included in the digits array.
* If so, then simply return `"Boom!"`.
* If the iteration of the entire array completes without finding a `'7'`, then return `"there is no 7 in the array"`.

---

#### Code

```javascript
function sevenBoom(numbers) {

  for (let index = 0; index < numbers.length; index += 1) {
    let digits = String(numbers[index]).split('');

    if (digits.includes('7')) {
      return "Boom!";
    }
  }

  return "there is no 7 in the array";
}
```

