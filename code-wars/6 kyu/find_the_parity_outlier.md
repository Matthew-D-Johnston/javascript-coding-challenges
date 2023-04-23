##### Code Wars > 6 kyu

---

## Find the Parity Outlier

##### Problem:

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer `N`. Write a method that takes the array as an argument and returns this "outlier" `N`.

**In my own words:**

Take an array containing at least 3 integers. The integers will all be either odd or even except for a single integer. For example, all the integers will be odd with a single even integer or they will all be even with a single odd integer. Take the array and find the single integer that does not match all the others.



---

##### Examples / Test Cases:

```javascript
findOutlier([2, 8, 4, 3, 10, 22, 14]);
// => 3
findOutlier([17, 9, 55, 9, 7, 4]);
// => 4
findOutlier([4, 4, 4, 4, 4, 1, 4, 4, 4, 4, 4, 4, 4]);
// => 1
```

---

##### Data Structure:

**_Inputs_**

* An array of integers.

**_Outputs_**

* A single integer.

---

##### Algorithm:

* Create two empty arrays, one for even integers and one for odd.
* Iterate through the given array and push the even integers to their corresponding array and the odd integers to their corresponding array.
* Check the lengths of each array. Whichever array has a length of one, return the value of the integer within that array.

---

##### Code:

```javascript
function findOutlier(integers) {
  let even = [];
  let odd = [];

  integers.forEach(integer => {
    if (integer % 2 === 0) {
      even.push(integer);
    } else {
      odd.push(integer);
    }
  });

  if (even.length === 1) {
    return even[0];
  } else {
    return odd[0];
  }
}
```



