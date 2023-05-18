##### Structy > Linked Lists

---

## is univalue list

#### Problem

##### Instructions:

Write a function, *isUnivalueList*, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.

##### Definitions/Rules (implicit and explicit):

* exactly one unique value: every node in the linked list contains the same value; if two separate nodes have two separate values then return `false`.
* assume the input list is non-empty: there will be at least one node with a value.

##### Input/Output:

* Input: head of a linked list.
* Output: a boolean that indicates whether or not the linked list contains exactly one unique value.

##### Mental Model:

Take the head of the linked list and retrieve its value. Then traverse to the next node in the list and retrieve its value. Compare it to the value contained in the head. If they are they same continue on to the next node. If they are different, return false. If in continuing to the next node the current node becomes null, then we have traversed the entire list without returning false and we should return true.

---

#### Examples / Test Cases

```
test_00

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

isUnivalueList(a); // true

test_01

const a = new Node(7);
const b = new Node(7);
const c = new Node(4);

a.next = b;
b.next = c;

// 7 -> 7 -> 4

isUnivalueList(a); // false

test_02

const u = new Node(2);
const v = new Node(2);
const w = new Node(2);
const x = new Node(2);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 2 -> 2 -> 2

isUnivalueList(u); // true

test_03

const u = new Node(2);
const v = new Node(2);
const w = new Node(3);
const x = new Node(3);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 3 -> 3 -> 2

isUnivalueList(u); // false

test_04

const z = new Node('z');

// z

isUnivalueList(z); // true
```

---

#### Data Structures

##### Input:

* A node representing the head of a linked list.

##### Output:

* A boolean value.

---

#### Algorithm

* Initialize a `unique_value` variable and set it equal to the value of the given head node.
* Initialize a `current` variable and set it equal to `head.next`.
* Initialize a `while` loop with the condition `current != null`.
  * within the loop, compare `unique_value` to `current.val`
  * If the values are different, return `false`
  * Otherwise, set `current` equal to `current.next`
* Outside of the loop, return `true`.

---

#### Code

```javascript
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueList = (head) => {
  let unique_value = head.val;
  let current = head.next;
  
  while (current != null) {
    if (unique_value != current.val) {
      return false;
    }
    
    current = current.next;
  }
  
  return true;
};
```

