##### Code Wars > 6 kyu

---

## Integer Depth

#### Problem

##### Instructions:

The `depth` of an integer `n` is defined to be how many multiples of `n` it is necessary to compute before all `10` digits have appeared at least once in some multiple.

example:

```
let see n=42

Multiple         value         digits     comment
42*1              42            2,4 
42*2              84             8         4 existed
42*3              126           1,6        2 existed
42*4              168            -         all existed
42*5              210            0         2,1 existed
42*6              252            5         2 existed
42*7              294            9         2,4 existed
42*8              336            3         6 existed 
42*9              378            7         3,8 existed
```

Looking at the above table under `digits` column you can find all the digits from `0` to `9`, Hence it required `9` multiples of `42` to get all the digits. So the depth of `42` is `9`. Write a function named `computeDepth` which computes the depth of its integer argument. Only positive numbers greater than zero will be passed as an input.

##### Definitions/Rules (explicit and implicit):

* Depth: the number of multiples of a given number `n` that need to be computed before all 10 digits have appeared at least once in one of the multiples.
* 10 digits: 0 - 9
* Multiples (examples): `n*1`, `n*2`, `n*3`, etc.
* The number `n` will be passed as the argument to the function. It will be an integer greater than 0.

##### Input/Output:

* Input: an integer greater than 0.
* Output: an integer representing the number of necessary multiples.

##### Mental Model:

Take an integer. Multiply it by 1 and then inspect each digit of the result. Keep track of the unique digits. Then multiply by 2. Repeat the inspection process, keeping track of the unique digits compared to all the digits before. Continue the process of increasing the multiple until all 10 digits have been seen.

---

#### Examples / Test Cases

```javascript
computeDepth(42)
// => 9
computeDepth(1)
// => 10
```

---

#### Data Structure

##### Input:

* an integer

##### Output:

* an integer

---

#### Algorithm

* create an empty array called `digits`
* Create a variable called `multiple` and assign it the integer `1`
* initiate a while loop with the condition that the length of the `digits` array is less than 10
* within the loop, store the result of multiplying the given integer with the `multiple`
* turn the result into a string and split the string into an array of individual digits.
* iterate over the array
* if the `digits` array includes the digit, exclude that digit; otherwise push it to the array.
* when the loop is finished, return the value of the `multiple` variable

---

#### Code

```javascript
function computeDepth(int) {
  let digits = [];
  let depth = 0;

  while (digits.length < 10) {
    depth += 1;
    let multiple = int * depth;

    String(multiple).split('').forEach(digit => {
      if (!digits.includes(Number(digit))) {
        digits.push(Number(digit));
      }
    });
  }

  return depth;
}
```





