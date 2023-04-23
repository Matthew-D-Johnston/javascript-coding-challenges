##### Code Wars > 6 kyu

---

## Calculate Pyramid Height

#### Problem

##### Instructions:

Your task is to calculate the maximum possible height of a perfectly square pyramid (the number of complete layers) that we can build, given `n` number of cubes as the argument.

- The top layer is always only 1 cube and is always present.
- There are no hollow areas, meaning each layer must be fully populated with cubes.
- The layers are thus so built that the corner cube always covers the inner 25% of the corner cube below it and so each row has one more cube than the one below it.

If you were given only 5 cubes, the lower layer would have 4 cubes and the top 1 cube would sit right in the middle of them, where the lower 4 cubes meet.

If you were given 14 cubes, you could build a pyramid of 3 layers, but 13 wouldn't be enough as you would be missing one cube, so only 2 layers would be complete and some cubes left over!

What is the tallest pyramid possible we can build from the given number of cubes? Simply return the number of **complete** layers.

##### Definitions/Rules (explicit and implicit):

* pyramid height = number of complete layers of the pyramid
* top layer is always 1 cube
* each successive layer will have 1 more cube per row and column (thus the second layer will be 2x2 = 4 cubes and the third layer will be 3x3 = 9 cubes, etc.)

##### Input/Output:

* Input: the total number of cubes that can be used to build the pyramid
* Output: the number of layers that can be constructed given the number of cubes

##### Mental Model:

Take the total number of cubes that are given for construction and determine how many complete layers can be built with those cubes.

---

#### Examples / Test Cases

```javascript
pyramidHeight(4)
// => 1
pyramidHeight(5)
// => 2
pyramidHeight(13)
// => 2
pyramidHeight(14)
// => 3
pyramidHeight(30)
// => 4
pyramidHeight(31)
// => 4
```

---

#### Data Structure

##### Input:

* an integer representing total number of cubes used for construction.

##### Output:

* an integer representing the total number of complete layers that can be constructed given the number of cubes.

---

#### Algorithm

* set a variable for total layers starting at zero
* create a while loop whose condition is the given number of cubes is greater than 0.
* within the loop subtract the square of the layers variable from the number of cubes
* then increment the layers variable by 1
* when the loop is finished looping, if the number of layers variable is less than 0, subtract 1 from the layers variable.
* return the layers variable

---

#### Code

```javascript
function pyramidHeight(n) {
  let layers = 0;

  while (n >= 0) {
    n -= (layers * layers);
    layers += 1;
  }

  if (n < 0) {
    layers -= 2;
  }

  return layers;
}
```

