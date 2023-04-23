##### Code Wars > 5 kyu

---

## Array Erasing

### Problem

##### Description:

You are given an sequence of zeros and ones. With each operation you are allowed to remove consecutive equal elements, however you may only remove single elements if no more groups of consective elements remain. How many operations will it take to remove all of the elements from the given sequence?  

##### Definition/Rules

* sequence of zeros and ones: array of zeros and ones
* operation: remove consecutive equal elements (i.e. two or more of a sequence of ones or zeros)
* only remove single elements if no more groups of consecutive elements remain

##### Input/Output

* Input is an array of zeros and ones.
* Output is the minimum number of operations to remove all elements.

##### Mental Model

Given an array of zeros and ones, determine whether there are groups of consecutive elements. If not, then starting from the midpoint of the array remove a single element. Then check to see if there are any groups of consecutive elements. If there are groups, then remove the whole group. Keep doing this, starting from the midpoint of the array until there are no more elements left.

---

### Examples / Test Cases

```javascript
arrayErasing([0, 1, 1, 1, 0]) === 2
arrayErasing([0, 1, 0, 0, 0]) === 3
arrayErasing([1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1]) === 3
arrayErasing([1, 0, 1, 0, 1, 0, 0, 1]) === 5
arrayErasing([1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1]) === 5
```

---

### Data Structure

##### Input:

* An array whose elements are integer values, either `0`s or `1`s

##### Output:

* An integer indicating the minimum number of operations to remove all elements.

##### Intermediate Data Structures:

* ???

---

### Algorithm

* Start by locating the midpoint of the array.

* If the element has consecutive elements that are equal to it.

* Make a function that extracts the start and end indexes of a group of consecutive equal elements given an index within the range and the array.

  * `findIndexes(idx, array)`

  * create an empty array

  * matching element = `array[idx]`

  * start a loop and iterate over the array starting from the `idx` if the the previous element matches but the element before the previous does not, then store the previous index as the first element of the array and break out of the loop; if they both match then keep iterating.

  * Do another loop but this time check the next elements rather than the previous ones; store the result index as the second element.

    ```javascript
    function findIndexes(idx, array) {
      let indexes = [];
      let matchElement = array[idx];
      
      for (let i = idx; i >= 1; i -= 1) {
        if (array[i - 1] !== matchElement) {
          indexes.push(i);
        	break;
        }
      }
      
      for (let i = idx; i <= array.length - 1; i += 1) {
        if (array[i + 1] !== matchElement) {
          indexes.push(i);
          break;
        }
      }
      
      if (indexes[0] === indexes[1]) {
        indexes = findIndexes(idx + 1, array);
      } else if (idx + 1 > array.length - 1) {
        return indexes;
      }
      
      return indexes;
    }
    ```

* If the start and end index are identical then we do not have a group of consecutive equal elements. In this case, move on to the next element and check again. If the next element is part of a group then 

