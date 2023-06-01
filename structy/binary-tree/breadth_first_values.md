##### Structy > Binary Tree

---

## breadth first values

#### Problem

##### Instructions:

Write a function, *breadthFirstValues*, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.

##### Definitions/Rules (implicit and explicit):

* root of a binary tree: the root has no parent nodes.
* Value of the tree: each node has a `.val` property with a value stored in it.
* Breadth-first order: nodes higher in the tree are processed first.

##### Input/Output:

* Input: the root of a binary tree.
* Output: an array containing all values of the tree in breadth-first order.

##### Mental Model:

Create a queue (i.e. array). Store the first node in the queue. Use a while loop conditional on the queue containing at least one element. Inside the loop, pop the first-in-line queue element out of the queue. Store the value of the given node in a results array. Check if the node has left and right children. If so, starting with the left child, push the children onto the queue. Continue until the queue is empty. Return the results array.

---

#### Examples / Test Cases

```
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

breadthFirstValues(a); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']
```

```
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

breadthFirstValues(a); 
//   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
```

```
const a = new Node('a');

//      a

breadthFirstValues(a); 
//    -> ['a']
```

```
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const x = new Node('x');

a.right = b;
b.left = c;
c.left = x;
c.right = d;
d.right = e;

//      a
//       \
//        b
//       /
//      c
//    /  \
//   x    d
//         \
//          e

breadthFirstValues(a); 
//    -> ['a', 'b', 'c', 'x', 'd', 'e']
```

```
breadthFirstValues(null); 
//    -> []
```

---

#### Data Structures

##### Input:

* A node.

##### Output:

* An array of string values.

---

#### Algorithm

* Check if the given `root` variable is `null`. If so, return `[]`.
* Declare a `results` variable and store it as an empty array.
* Declare a `queue` variable and initialize it as an array with the `root` node.
* Initialize a `while` loop with the condition `queue.length > 0`.
  * Inside the loop, pop the last element of the array from `queue` and store it in a variable called `node`.
  * push the `node.val` to the `results` array.
  * Check if `node.left` exists; if so, `unshift` `node.left` to the `queue`.
  * Do the same for `node.right`
  * This continues until the `queue` is empty.
* Outside of the loop, return the `results` array.



---

#### Code

```javascript
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
  if (root === null) {
    return [];
  }
  
  let values = [];
  let queue = [root];
  
  while (queue.length > 0) {
    let node = queue.pop();
    values.push(node.val);
    
    if (node.left) {
      queue.unshift(node.left);
    }
    
    if (node.right) {
      queue.unshift(node.right);
    }
  }
  
  return values;
};
```

