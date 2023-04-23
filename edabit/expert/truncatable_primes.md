##### Edabit > JavaScript > Expert

---

## Truncatable Primes

#### Problem

##### Instructions:

A left-truncatable prime is a prime number that contains no 0 digits and, when the first digit is successively removed, the result is always prime.

A right-truncatable prime is a prime number that contains no 0 digits and, when the last digit is successively removed, the result is always prime.

Create a function that takes an integer as an argument and:

- If the integer is only a left-truncatable prime, return `"left"`.
- If the integer is only a right-truncatable prime, return `"right"`.
- If the integer is both, return `"both"`.
- Otherwise, return `false`.

_Notes_

The input integers will not exceed 10^6.

##### Definition/Rules (explicit and implicit):

* Prime: a number that is divisible only by one and itself.
* Truncatable primes cannot contain any 0 digits.
* Left-truncatable: when the first digit is successively removed, the result is always prime.
* Right-truncatable: when the last digit is successively removed, the result is always prime.

##### Input/Output:

* Input: an integer.
* Output: a string saying whether the integer is "left" or "right" truncatable, or "both", or neither.

##### Mental Model

Take the given integer. Check if the integer contains an 0 digits. Return `false` if it does. Create two arrays of sub-integers. The first array contains sub-integers created by successively taking away the first digit of the original integer. The second array contains sub-integers created by successively taking away the last digit of the original integer. Check if each of the arrays of sub-integers are prime. If they are all prime then the integer is left-truncatable. Do the same for the second array. If they are all prime, then the integer is right-truncatable. If it is left and right truncatable, return `"both"`. Otherwise, just return `"left"` for left-truncatable or `"right"` for right-truncatable. If neither, return `false`.

---

#### Examples / Test Cases

```javascript
truncatable(9137) ➞ "left"
// Because 9137, 137, 37 and 7 are all prime.

truncatable(5939) ➞ "right"
// Because 5939, 593, 59 and 5 are all prime.

truncatable(317) ➞ "both"
// Because 317, 17 and 7 are all prime and 317, 31 and 3 are all prime.

truncatable(5) ➞ "both"
// The trivial case of single-digit primes is treated as truncatable from both directions.

truncatable(139) ➞ false
// 1 and 9 are non-prime, so 139 cannot be truncatable from either direction.

truncatable(103) ➞ false
// Because it contains a 0 digit (even though 103 and 3 are primes).
```

---

#### Data Structures

##### Input:

* An integer.

##### Output:

* Either a string or `false`.

---

#### Algorithm

* Declare a `string_integer` variable and assign it to the integer converted to a string.
* Check if `string_integer` contains any `'0'`s.
* If it does, return `false`. Otherwise continue on.
* Create an `isPrime` function.
  * The `isPrime` function takes an integer. If the integer is a `1`, return `false`.
  * Declare a `divisor` variable and assign it to `2`.
  * Initiate a `while` loop whose condition is `divisor < integer / 2`
  * If the remainder of dividing the `integer` by the `divisor` is ever `0`, return `false`.
  * Otherwise, if the loop completes without returning `false`, return `true`.
* Declare a `left_sub_integers` variable and assign it to an empty array
* Declare an `left_index` variable and set it to `0`.
* Initiate a `while` loop with the condition `left_index < string_integer.length`
  * within the loop, use `slice(left_index)` on `string_integer` to create sub-integers of the original integer.
  * Convert the sub-integers to numbers and push them to the `left_sub_integers` array.
  * increment the `left_index` by `1`.
* Declare a `right_sub_integers` variable and assign it to an empty array
* Declare a `right_index` variable and set it equal to `string_integer.length`
* Initiate a `while` loop with the condition `right_index > 0`
  * within the loop, use `slice(0, right_index)` on `string_integer` to create sub-integers of the original integer.
  * Convert the sub-integers to numbers and push them to the `right_sub_integers` array.
  * decrement the `right_index` by `1`
* Declare an `isLeftTruncatable` variable and set it to true.
* Loop over the `leftSubIntegers` array.
* Call the `isPrime` function on each integer.
* If the function returns `false` for any integer, set `isLeftTruncatable` equal to `false`.
* Declare an `isRightTruncatable` variable and do the same with the `rightSubIntegers` array.
* If `isLeftTruncatable` and `isRightTruncatable` are both true, return `"both"`.
* If only the left is true, return `"left"`
* If only the right is true, return `"right"`
* If neither is true, return `false`

---

#### Code

```javascript
const truncatable = (int) => {
  let stringInteger = String(int);

  if (/0/.test(stringInteger)) { return false }

  let leftSubIntegers = leftSubIntegersArray(stringInteger);
  let rightSubIntegers = rightSubIntegersArray(stringInteger);
  
  let isLeftTruncatable = true;
  leftSubIntegers.forEach(subInteger => {
    if (!isPrime(subInteger)) {
      isLeftTruncatable = false;
    }
  });

  let isRightTruncatable = true;
  rightSubIntegers.forEach(subInteger => {
    if (!isPrime(subInteger)) {
      isRightTruncatable = false;
    }
  });

  if (isLeftTruncatable && isRightTruncatable) {
    return "both";
  } else if (isLeftTruncatable && !isRightTruncatable) {
    return "left";
  } else if (!isLeftTruncatable && isRightTruncatable) {
    return "right";
  } else {
    return false;
  }
}

const isPrime = (int) => {
  if (int === 1) { return false }

  let divisor = 2;

  while (divisor <= int / 2) {
    if (int % divisor === 0) {
      return false
    }

    divisor += 1;
  }

  return true
}

const leftSubIntegersArray = (stringInteger) => {
  let leftSubIntegers = [];
  let leftIndex = 0;

  while (leftIndex < stringInteger.length) {
    let subInteger = Number(stringInteger.slice(leftIndex));
    leftSubIntegers.push(subInteger);
    leftIndex += 1;
  }

  return leftSubIntegers;
}

const rightSubIntegersArray = (stringInteger) => {
  let rightSubIntegers = [];
  let rightIndex = stringInteger.length;

  while (rightIndex > 0) {
    let subInteger = Number(stringInteger.slice(0, rightIndex));
    rightSubIntegers.push(subInteger);
    rightIndex -= 1;
  }

  return rightSubIntegers;
}
```

