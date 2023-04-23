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

console.log(longestBouncyList([7, 9, 6, 10, 5, 11, 10, 12, 13, 4, 2, 5, 1, 6, 4, 8]));
console.log(longestBouncyList([7, 7, 7, 7, 7]));
console.log(longestBouncyList([1, 2, 3, 4, 5, 6]));
