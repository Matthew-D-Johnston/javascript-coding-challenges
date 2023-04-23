##### Code Wars > 6 kyu

---

## Longest Strict Bouncy Subarray

#### Problem

##### Instructions:

This kata was seen in programming competitions with a wide range of variations. A strict bouncy array of numbers, of length three or longer, is an array that each term (neither the first nor the last element) is strictly higher or lower than its neighbours.

For example, the array:

```
arr = [7,9,6,10,5,11,10,12,13,4,2,5,1,6,4,8] (length = 16)
```

The two longest bouncy subarrays of arr are

```
[7,9,6,10,5,11,10,12] (length = 8) and [4,2,5,1,6,4,8] (length = 7)
```

According to the given definition, the arrays `[8,1,4,6,7]`, `[1,2,2,1,4,5]`, are not bouncy.

For the special case of length 2 arrays, we will consider them strict bouncy if the two elements are different.

The arrays `[-1,4]` and `[0,-10]` are both bouncy, while `[0,0]` is not.

An array of length 1 will be considered strict bouncy itself.

You will be given an array of integers and you should output the longest strict bouncy subarray.

In the case of having more than one bouncy subarray of same length, it should be output the subarray with its first term of lowest index in the original array.

Let's see the result for the first given example.

```
arr = [7,9,6,10,5,11,10,12,13,4,2,5,1,6,4,8]
longest_bouncy_list(arr) === [7,9,6,10,5,11,10,12]
```

See more examples in the example tests box.

Features of the random tests

```
length of the array inputs up to 1000
-500 <= arr[i] <= 500
```

Enjoy it!

##### Definitions/Rules (explicit and implicit):

* Strict bouncy array (length of at least 3): an array in which each of the inner elements (neither the first nor the last element) is strictly higher or strictly lower than its neighbours.
* Example of strictly higher: `[3, 6, 1]`; 6 is strictly higher than both 3 and 1, which are the neighbours of 6.
* Strict bouncy array (length 2): each of the two elements must be different; for example, `[-1, 4]` is bouncy but `[0, 0]` is not.
* Strict bouncy array (length 1): every array of length 1 is considered strict bouncy.
* Two longest bouncy subarrays of the same length: the subarray whose first term is of the lowest index in the original array should be output.

##### Input/Output:

* Input: an array of indeterminate length containing only integers
* Output: the longest strict bouncy subarray

##### Mental Model:

Take the given array. Iterate over the array starting with the second element (the element whose index is 1). Compare that element to the two neighbour elements. If it is strictly greater or strictly less than the neighbours then store those elements in an array. Then move onto the next element. Do the same thing, storing the three elements in the same array if they match the same criteria. Keep doing this until an element is not strictly greater or strictly less than its neighbours. Store the subarray (if it is not empty) in another array. Then reset the subarray to an empty array. If the element and its preceding neighbour are different numbers, store them in the subarray, which you then store in the bigger array. If they are the same, then compare the element and its following neighbour. If they are different store them in the subarray and store the subarray in the nested array. If they are the same just store the element in the subarray and store it in the nested array. Reset the subarray to an empty array. Sort the nested array by length of the subarrays. Output the first element of that subarray.

---

#### Examples / Test Cases

```javascript
longestBouncyList([7,9,6,10,5,11,10,12,13,4,2,5,1,6,4,8]);
// => [7, 9, 6, 10, 5, 11, 10, 12]
longestBouncyList([7, 7, 7, 7, 7]);
// => [7]
longestBouncyList([1, 2, 3, 4, 5, 6]);
// [1, 2]
```

---

#### Data Structures

##### Input:

* An array of integers

##### Output:

* An array of integers, which is a subarray of the original array.

---

#### Algorithm

* create an empty array called `bouncyLists`
* Create another empty array called `bouncySubArray`
* Start a `for` loop that begins at index `1` and will iterate up to the second last index, which is the length of the original array minus 2. Increment by 1 each iteration.
* Within the loop, if the current element is either greater than or lower than its neighbours, pop the last element off of the `bouncySubArray`and push all three elements to the `bouncySubArray`.
* Otherwise, compare the current element with its preceding neighbour. If the two are different, push the `bouncySubArray` onto the `bouncyLists` array if the `bouncySubArray` is not empty. 

---

#### Code

```javascript
"use strict";

function longestBouncyList(array) {
  let bouncyLists = [];
  let bouncySubArray = [];

  for (let index = 1; index < array.length - 1; index += 1) {
    let current = array[index];
    let preceding = array[index - 1];
    let following = array[index + 1];
    
    if ((current > preceding && current > following) || (current < preceding && current < following)) {
      bouncySubArray.pop();
      if (bouncySubArray.length === 0) {
        bouncySubArray.push(preceding, current, following);
      } else {
        bouncySubArray.push(current, following);
      }
    } else if (current !== preceding) {
      if (bouncySubArray.length > 0) {
        bouncyLists.push(bouncySubArray);
      }
      bouncySubArray = [];
      bouncySubArray.push(preceding, current);
      bouncyLists.push(bouncySubArray);
      bouncySubArray = [];
    } else if (current !== following) {
      if (bouncySubArray.length > 0) {
        bouncyLists.push(bouncySubArray);
      }
      bouncySubArray = [];
      bouncySubArray.push(current, following);
      bouncyLists.push(bouncySubArray);
      bouncySubArray = [];
    } else {
      if (bouncySubArray.length > 0) {
        bouncyLists.push(bouncySubArray);
      }
      bouncySubArray = [];
      bouncySubArray.push(current);
      bouncyLists.push(bouncySubArray);
      bouncySubArray = [];
    }
  }

  bouncyLists.sort((a, b) => b.length - a.length);
  
  return bouncyLists[0];
}
```

I think this code solves the problem, but it is failing the Code Wars tests, presumably because it's taking too long. Thus, I would need to optimize this code.