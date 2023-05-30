##### Structy > Binary Tree

---

## depth first values

#### Problem

##### Instructions:

Write a function, *depthFirstValues*, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

##### Definitions/Rules (implicit and explicit):

* Root of a binary tree: node which has no parent nodes.
* depth-first order: the algorithm must traverse the entire tree by first going deep before going wide.
* values of the tree: each node contains a `.val` property, the value of which needs to be added to the array.

##### Input/Output:

* Input: the root of a binary tree
* Output: an array containing the values of the tree in depth-first order.

##### Mental Model:

The best way to go about this is to use a stack. Push the root of the binary tree onto the stack. Then begin a  loop conditional on the stack not being empty. Pop the top element off the stack, which should be a node. Take the value of that node and push it to the results array. Check if the node has a right child. If so, push it onto the stack. Then check if the node has a left child. If so, push it onto the stack. Then repeat the loop until there is nothing left in the stack. Return the results array.

---

#### Examples / Test Cases

```javascript
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
```

```javascript
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']
```

---

#### Data Structures

##### Input:

* The root node of a binary tree.

##### Output:

* An array of strings.

---

#### Algorithm

* Declare `stack` variable and initialize it with the value of an array containing the `root` node.
* Declare a `values` variable and initialize it with an empty array.
* Begin a `while` loop conditional on `stack.length > 0`.
* Declare a `node` variable and initialize it with the value returned by `stack.pop()`.
* Push the value of `node.val` to the `values` array.
* Check to see if `node.right != null`; if so, then push `node.right` to the top of the stack.
* Do the same thing for `node.left`.
* Continue to the next iteration of the loop.
* Once the stack is empty and the loop stops, return the `values` array.



---

#### Code

```javascript
```

