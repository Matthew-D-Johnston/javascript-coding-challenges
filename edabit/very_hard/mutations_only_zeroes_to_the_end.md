##### Edabit > Very Hard

---

## Mutations Only: Zeroes to the End

#### Problem

##### Instructions:

Write a function that moves all the zeroes to the end of an array. Do this **without** returning a **copy** of the input array.

##### Rules/Definitions (implicit and explicit):

* move all zeroes to the end of the array.
* mutate the original array; do not return a copy.

##### Input/Output:

* Input: an array of numbers.
* Output: an array of numbers with all the zeros moved to the end of the array.

##### Mental Model:

Create two pointers, one at the start of the array and one at the end. For the end pointer, if it is pointing at a zero, decrement it until it is no longer pointing at a 0. Then go to the start pointer. If the start pointer is pointing at anything other than a 0, increment the pointer. If it ends up pointing at a 0, take the zero and append it to the end of the array.

----

#### Examples / Test Cases

```javascript
zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]

zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]

zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]

zeroesToEnd([0, 0]) ➞ [0, 0]
```

---

#### Data Structures

##### Input:

* An array of numbers

##### Output:

* An array of numbers; zeroes are at the end.

---

#### Algorithm

* Declare an `startPointer` and an `endPointer`, initializing the first pointer to the index 0 and the last pointer to the final index.
* Decrement the `endPointer` until it is pointing at a non-zero value.
* Next increment the `startPointer` until it is at the same index as the `endPointer`.
* If the `startPointer` is pointing at a value that is a zero, remove the zero and append it to the end of the array. Do not increment the start pointer, but do decrement the `endPointer` by 1.
* If the `startPointer is pointing at any other value, increment it by 1.

---

#### Code

```javascript
function zeroesToEnd(nums) {
  let startPointer = 0;
  let endPointer = nums.length - 1;

  while (nums[endPointer] === 0) {
    endPointer -= 1;
  }

  while (startPointer < endPointer) {
    if (nums[startPointer] === 0) {
      nums.splice(startPointer, 1);
      nums.push(0);
      endPointer -= 1;
    } else {
      startPointer += 1;
    }
  }

  return nums;
}
```

