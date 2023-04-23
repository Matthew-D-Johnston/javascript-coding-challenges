##### Edabit > JavaScript > Very Hard

---

## Know Your Neighbor

#### Problem

##### Instructions:

Create a function that takes a string as an argument and returns `true` if each letter in the string is surrounded by a plus sign. Return `false` otherwise.

_Notes_

For clarity, each **letter** must have a plus sign on both sides.

##### Definitions/Rules (explicit and implicit):

* Each letter in the string must have a plus sign on both sides in order to return `true`. For example, `+d+`.

##### Input/Output:

* Input: a string of characters.
* Output: a boolean.

##### Mental Model:

Take the string of characters. Determine if there exists at least one instance of a letter that is not surrounded by a plus sign. If there is, then return `false`. Otherwise, return `true`.

---

#### Examples / Test Cases

```javascript
plusSign("+f+d+c+#+f+")
// => true

plusSign("+d+=3=+s+")
// => true

plusSign("f++d+g+8+")
// => false

plusSign("+s+7+fg+r+8+")
// => false
```

---

#### Data Structures

##### Input:

* A string.

##### Output:

* A boolean.

---

#### Algorithm

* Use a regex that determines if there is a letter that does not have a plus sign on both sides.
* If there is at least one match to the regex, return `false`. Otherwise, return `true`.

---

#### Code

```javascript
function plusSign(chars) {
  let regex = new RegExp('([^+][a-z])|([a-z][^+])|^[a-z]|[a-z]$', 'gi');
  return !regex.test(chars);
}
```

