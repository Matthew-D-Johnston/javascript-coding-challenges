##### Code Wars > 6 kyu

---

## Find the Unique Number

#### Problem

##### Instructions:

There is an array with some numbers. All numbers are equal except for one. Try to find it!

```javascript
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
```

It’s guaranteed that the array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

##### Definitions/Rules (explicit and implicit):

* An array contains only numbers (implicit).
* All numbers are equal except for one (explicit).
* Find the unique number (explicit).
* The array contains at least 3 numbers (explicit).

##### Input/Output:

* Input: an array of numbers.
* Output: the unique number

##### Mental Model:

Take an array of at least 3 numbers. The array all of the numbers except for one will be the same. Find the single number that is different than the rest.

---

#### Examples / Test Cases

```javascript
findUniq([1, 1, 1, 2, 1, 1]);
// => 2
findUniq([0, 0, 0.55, 0, 0]);
// => 0.55
findUniq([1000, 3, 3, 3, 3, 3, 3, 3]);
// => 1000
findUniq([9.7, 9.7, 9.7, 9.7, -4.3, 9.7, 9.7]);
// => -4.3
```

---

#### Data Structure

##### Inputs:

* An array of numbers.

##### Outputs:

* A single number.

---

#### Algorithm

* Begin by sorting the given array. This means that the unique number will either be the first or the last element of the array.
* Iemove the first and last element from the array and store each in a variable.
* If the value of the first element matches (is included) the other elements of the array then return the last element. If it doesn't mat then return that element.



---

#### Code

```javascript
function findUniq(numbers) {
  numbers.sort();

  let first = numbers.shift();
  let last = numbers.pop();

  if (numbers.includes(first)) {
    return last;
  } else {
    return first;
  }
}
```

Refactored solution:

```javascript
function findUniq(numbers) {
  numbers.sort();

  let first = numbers.shift();
  let last = numbers.pop();

  return numbers.includes(first) ? last : first;
}
```

