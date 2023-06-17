##### Edabit > Very Hard

---

## Even vs. Odds

#### Problem

##### Instructions:

Odd numbers like to hangout with odd numbers. Even numbers like to hangout with even numbers.

A **spot** is an insertion between two numbers in an array. Given an array of **n** integers in length, there are **n-1** spots available.

For instance:

```
[3, 4, 9, 10, 1]  // Array of 5 digits can also be thought of as...

[3, __ , 4, __ , 9, __, 10, __, 1]  // ...an array of 4 spots.
```

After a number is newly inserted into a **spot**, it's **left neighbor** is the number directly to the left of it and it's **right neighbor** is the number directly to the right of it.

For instance:

```
[3, 6, 4, 9, 10, 1]  // Left neighbor of 6 is 3, right neighbor of 6 is 4.
```

Odd numbers like having the following **(left neighbor, right neighbor combinations)**: `(odd, even), (even, odd), (odd, odd)` .They **dislike** having both neighbors being even, or `(even, even)`.

Similarly, even numbers like the following neighbor combinations: `(even, odd), (odd, even), (even, even)`. They **dislike** having both neighbors being odd, or `(odd, odd)`.

Given an array, calculate the number of liked spots.

##### Rules/Definitions (implicit and explicit):

* Odd number liked combinations: (odd, even), (even, odd), (odd, odd)
* Odd number disliked combinations: (even, even)
* Even number liked combinations: (even, odd), (odd, even), (even, even)
* Even number disliked combinations: (odd, odd)

##### Input/Output:

Input: an array of numbers and the number that will occupy the spots throughout the array.

Output: The number of liked spots.

##### Mental Model:

Determine whether the given number is even or odd. We will have to iterate over the array and compare the current number with the next number. Only iterate up until the second last number. For each comparison, check to see if if the current numbers are even or odd. If the given number is even and at least one of the other numbers is even, then we can increment the liked spots by 1. If the given number is odd and at least one of the other numbers is odd, then we can also increment the liked spots by 1. After iterating through the array, return the number of liked spots.

---

#### Examples / Test Cases

```JavaScript
availableSpots([0, 4, 6, 8], 9) ➞ 0
// 9 likes NONE of the following spots: [0, __, 4], [4, __ , 6], [6, __, 8] b/c all of his neighbors are even.

availableSpots([0, 4, 6, 8], 12) ➞ 3
// 12 likes ALL of the spots.

availableSpots([4, 4, 4, 4, 5], 7) ➞ 1
// 7 dislikes every spot except the last one at: [4, __, 5].

availableSpots([4, 4], 8) ➞ 1
```

---

#### Data Structures

##### Input:

* An array and a number.

##### Output:

* A number.

---

#### Algorithm

* Declare an `even` variable and initialize it with the value of `true` or `false` depending on whether the given number is even or not.
* Declare a `likedSpots` variable and initialize it with the value of `0`.
* Iterate over the array up until the second last element in the array.
* Set up a conditional statement conditonal on whether `even` is set to `true` or `false`.
* For the branch where `even === true`, set up another conditional statement that checks whether the current number or the next number is even. If one of these is true, then we can increment the `likedSpots` variable by `1`. Otherwise, we do nothing and move on to the next iteration.
* Likewise, for the `else` conditional where `even === false`, check to see if the current or next number is odd. If one of these numbers is odd, then we can increment the `likedSpots` variable by `1`. Otherwise we do nothing and move on to the next iteration.

---

#### Code

```javascript
const availableSpots = (nums, num) => {
  const even = num % 2 === 0;
  let likedSpots = 0;

  for (let idx = 0; idx < nums.length - 1; idx++) {
    let leftNeighbour = nums[idx];
    let rightNeighbour = nums[idx + 1];

    if (even) {
      if (leftNeighbour % 2 === 0 || rightNeighbour % 2 === 0) {
        likedSpots += 1;
      }
    } else {
      if (leftNeighbour % 2 === 1 || rightNeighbour % 2 === 1) {
        likedSpots += 1;
      }
    }
  }

  return likedSpots;
}
```

