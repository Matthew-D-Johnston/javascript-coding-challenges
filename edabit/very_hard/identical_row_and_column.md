##### Edabit > JavaScript > Very Hard

---

## Identical Row and Column?

#### Problem

##### Instructions:

Write a function that returns `true` if there exists a row that is identical to a column in a 2-D matrix, otherwise `false`.  

To illustrate:

```
[
  [1, 2, 3, 4],
  [2, 4, 9, 8],
  [5, 9, 7, 7],
  [6, 8, 1, 0]
]

// 2nd row + 2nd column are identical: [2, 4, 9, 8]
```

_Notes_

Non-square matrices should return `false`.

##### Definitions/Rules (explicit and implicit):

* 2-D Matrix: an array of nested arrays.
* Row: one of the nested arrays.
* Column: matching indices of the nested arrays.
* Non-square matrix: a matrix that does not have an equal number of rows and columns.

##### Input/Output:

* Input: an array of nested arrays.
* Output: `true` if there exists at least one identical row and column; `false` otherwise, or if the matrix is non-square.

##### Mental Model:

Take the given nested array and check to see if the length of the outer array has the same length as each of its neseted arrays. If any nested array has a length not equal to the length of the outer array, return `false`. If all is okay, then construct an array of nested arrays which correspond to the columns of the original array. Iterate over each array in the original array. For each nested array, check to see if there is a nested array in the newly-constructed array whose elements are identical to its own elements. If so, return `true`. If after iterating through each of the original nested arrays and no identical nested arrays are found, return `false`.

---

#### Examples / Test Cases

```javascript
hasIdentical([
  [4, 4, 4, 4],
  [2, 4, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]) ➞ true

hasIdentical([
  [4, 4, 9, 4],
  [2, 1, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]) ➞ false

hasIdentical([
  [4, 4]
  [2, 1]
]) ➞ false

hasIdentical([
  [4, 2]
  [2, 1]
])
```

---

#### Data Structures

##### Input:

* An array of nested arrays, which contain numbers.

##### Output:

* A boolean.

---

#### Algorithm

* Create an `isSquareMatrix(matrix)`  function:
  * Find the length of the given matrix
  * Initiate a `for` loop to iterate over the outer array.
  * Compare the length of each nested array to the length of the outer array.
  * If the lengths ever differ, return `false`.
  * If after the loop completes, all lengths were identical, return `true`.
* If `isSquareMatrix(matrix)` returns `false`, then return `false`
* Otherwise continue to construct a new matrix that transforms the columns of the original matrix into rows.
* Create a `columnsToRowsMatrix(matrix)` function.
  * Declare a `newMatrix` variable and set to an empty array, `[]`.
  * Initiate a `for` loop with `outerIndex = 0; outerIndex < matrix.length; outerIndex += 1`
  * Declare a `row` variable and set to an empty array `[]`.
  * Inside that `for` loop initiate another loop with `innerIndex = 0; innerIndex < matrix.length; innerIndex += 1`.
  * Inside the second `for` loop push the value of `matrix[innerIndex][outerIndex]` to the `row` array.
  * Outside of that loop but inside of the first `for` loop, push the `row` array to the `newMatrix` array.
  * Outside of both loops, return the `newMatrix` array.
* Declare a `newMatrix` variable and set it equal to the return value of `columnsToRowsMatrix(matrix)`.
* Initiate a `for` loop to iterate over both `matrix` and `newMatrix`
* Inside the `for` loop declare an `identical` variable and initially set it to `true`
* Initiate another `for` loop.
* Inside the inner `for` loop check to see if the current element of the current subarrays of the two matrices are identical. If they are not identical, change the value of identical to `false`
* After the inner `for` loop completes, check if the value of `identical` is equal to `true`, if it is, then simply return `true`.
* If the outer `for` loop completes without returning `true`, then return `false`.

---

#### Code

```javascript
function hasIdentical(matrix) {
  if (!isSquareMatrix(matrix)) { return false }

  let newMatrix = columnsToRowsMatrix(matrix);

  for (let outerIndex = 0; outerIndex < matrix.length; outerIndex += 1) {
    let matrixRow = matrix[outerIndex];

    for (let innerIndex = 0; innerIndex < newMatrix.length; innerIndex += 1) {
      let newMatrixRow = newMatrix[innerIndex];

      let identical = true;

      for (let index = 0; index < matrixRow.length; index += 1) {
        if (matrixRow[index] !== newMatrixRow[index]) {
          identical = false;
        }
      }

      if (identical) { return true }
    }
  }

  return false;
}


function isSquareMatrix(matrix) {
  let matrixLength = matrix.length;

  for (let index = 0; index < matrixLength; index += 1) {
    if (matrix[index].length !== matrixLength) { return false }
  }

  return true;
}

function columnsToRowsMatrix(matrix) {
  let newMatrix = [];

  for (let outerIndex = 0; outerIndex < matrix.length; outerIndex += 1) {
    let row = [];

    for (let innerIndex = 0; innerIndex < matrix.length; innerIndex += 1) {
      row.push(matrix[innerIndex][outerIndex]);
    }

    newMatrix.push(row);
  }

  return newMatrix;
}
```

