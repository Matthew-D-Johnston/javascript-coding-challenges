##### Edabit > JavaScript > Medium

---

## How Much is True?

#### Problem

##### Instructions:

Create a function which returns the number of `true` values there are in an array.

##### Definitions/Rules (explicit and implicit):

* The array contains `true` and `false` values or it is empty.
* 

##### Input/Output:

* Input: an array containing boolean values.
* Output: a number indicating the number of true values in the array.

##### Mental Model:

Take the given array and count the number of `true` values in it.



---

#### Examples / Test Cases

```javascript
countTrue([true, false, false, true, false]);
// => 2
countTrue([false, false, false, false]);
// => 0
countTrue([]);
// => 0
```

---

#### Data Structures

##### Input:

* An array containing boolean values.

##### Output:

* A number.

---

#### Algorithm

* Filter the array for the number of true values it contains. 
* Return the length of the resulting array.

---

#### Code

```javascript
function countTrue(array) {
  return array.filter(value => value).length;
}
```

