##### Edabit > JavaScript > Very Hard

---

## Group Monotonicity

#### Problem

##### Instructions:

Create a function which returns the indices where the monotonicity of a 1-D array changes. If there are none, return an empty array. A monotonic array is one that is either non-increasing or non-decreasing.

_Notes_

- Trivially, all points and line-segments are monotonic (see example #1).
- Return the indices where each monotonic section stops, not where each new one begins: i.e. return the "peaks" of the triangles (see example #2).
- Monotonic arrays are allowed to be constant (see example #3).
- You can expect positive and negative values in the array.

##### Definitions/Rules (explicit and implicit):

* Monotonic array: an array that is either non-increasing or non-decreasing.
* Return the indices where the array changes from increasing or constant to decreasing or from decreasing or constant to increasing.

##### Input/Output:

* Input: an array of numbers.
* Output: an array of numbers.

##### Mental Model:

Take the array. Check the first two elements of the array and compare them. If the first is greater than the second, then set the monotonicity to "decreasing". If the first is less than the second, set it to "increasing". If they are the same, set it to "constant". Then loop over the elements of the array from the first index until the second last index. For each element, compare whether it is greater than, less than, or equal to the next element. If the monotonicity is "increasing" or "constant" and the next element is less than the current element, then change the monotonicity to "decreasing" and push the index to an indices array. If the monotonicity is "decreasing" or "constant" and the next element is greater than the current element, then change the monotonicity to "increasing" and push the index to the indices array. If the next element is equal to the current element, change the monotonicity to "constant". After all iterations are complete, return the indices array.

---

#### Examples / Test Cases

```javascript
groupMonotonic([0, 1]) ➞ []

groupMonotonic([0, 2, 1]) ➞ [1]

groupMonotonic([0, 1, 1, 0]) ➞ [2]
```

---

#### Data Structures

##### Input:

* An array of numbers.

##### Output:

* An array of numbers.

---

#### Algorithm

* If the length of the array is less than or equal to `2`, return an empty array.
* Declare an `indexes` variable and set it to an empty array.
* Declare a `monotonicity` variable.
* Compare the first two elements of the array and set the `monotonicity` variable to either `"increasing"`, `"decreasing"`, or `"constant"`.
* Iterate over the given array starting at index `1` and going until the second last index, or `arr.length - 2`.
* Use conditional three conditional statements:
* If `(monotonicity === "increasing" || monotonicity === "constant") && arr[index] > arr[index + 1]`
  * set `monotonicity = "decreasing"`
  * push the `index` to the `indexes` array.
* If `(monotonicity === "decreasing" || monotonicity === "constant") && arr[index] < arr[index + 1]`
  * set `monotonicity = "increasing"`
  * push the `index` to the `indexes` array.
* If `arr[index] === arr[index + 1]`
  * set `monotonicity = "constant"`
* After the loop completes, return `indexes`.

---

#### Code

```javascript
const groupMonotonic = (arr) => {
  if (arr.length <= 2) {
    return [];
  }

  let indexes = [];
  let monotonicity;

  if (arr[0] < arr[1]) {
    monotonicity = 'increasing';
  } else if (arr[0] > arr[1]) {
    monotonicity = 'decreasing';
  } else {
    monotonicity = 'constant';
  }

  for (let index = 1; index < arr.length - 1; index += 1) {
    if ((monotonicity === 'increasing' || monotonicity === 'constant') && arr[index] > arr[index + 1]) {
      monotonicity = 'decreasing';
      indexes.push(index);
    }

    if ((monotonicity === 'decreasing' || monotonicity === 'constant') && arr[index] < arr[index + 1]) {
      monotonicity = 'increasing';
      indexes.push(index);
    }

    if (arr[index] === arr[index + 1]) {
      monotonicity = 'constant';
    }
  }

  return indexes;
}
```

