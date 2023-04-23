"use strict";

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

console.log(hasIdentical([
  [4, 4, 4, 4],
  [2, 4, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]));

console.log(hasIdentical([
  [4, 4, 9, 4],
  [2, 1, 9, 8],
  [5, 4, 7, 7],
  [6, 4, 1, 0]
]));

console.log(hasIdentical([
  [4, 4],
  [2, 1]
]));

console.log(hasIdentical([
  [4, 2],
  [2, 1]
]));