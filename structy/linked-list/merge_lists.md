##### Structy > Linked Lists

---

## merge lists

#### Problem

##### Instructions:

Write a function, *mergeLists*, that takes in the head of two *sorted* linked lists as arguments. The function should merge the two lists together into single *sorted* linked list. The function should return the head of the merged linked list.

Do this **in-place**, by mutating the original Nodes.

You may assume that both input lists are non-empty and contain increasing sorted numbers.

##### Definitions/Rules (implicit and explicit):

* merge the two lists into a single linked list.
* You can assume that the input lists contain increasing sorted numbers.
* The output list must also be sorted in increasing order.
* Return the head of the merged link list.

##### Input/Output:

* Input: the heads of two linked lists.
* Output: the head of the merged linked list.

##### Mental Model:

Iterate through each node of each of the lists. For each node, compare the value of that node with the value of the node of the other list. Whichever value is lower, place it next in the list and increment it to the next node. If you reach the end of one of the lists, then the remaining nodes of the other list can be appended to the tail of the merged list.

---

#### Examples / Test Cases

```
test_00

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25

mergeLists(a, q);
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 


test_01

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(1);
const r = new Node(8);
const s = new Node(9);
const t = new Node(10);
q.next = r;
r.next = s;
s.next = t;
// 1 -> 8 -> 9 -> 10

mergeLists(a, q);
// 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28 


test_02

const h = new Node(30);
// 30

const p = new Node(15);
const q = new Node(67);
p.next = q;
// 15 -> 67

mergeLists(h, p);
// 15 -> 30 -> 67
```

---

#### Data Structures

##### Input:

* Two heads of sorted linked lists.

##### Output:

* A single head of the merged linked list.

---

#### Algorithm

* Check which given head has the lowest value and make that node the head of the merged linked list.
* Also create a `tail` variable and assign it to the node that was just made the head.
* Create `current1` and `current2` variables, assigning `current1` to the node that is next to the `tail` and the `current2` variable to the `head` of the other linked list.
* Initiate a while loop on the condition that `current1 != null && current2 != null`.
  * Inside the loop, check if `current1.val <= current2.val`. If so,
    * `tail.next = current1`
    * `tail = current1`
    * `current1 = current1.next`
  * If `current1.val > current2.val`
    * `tail.next = current2`
    * `tail = current2`
    * `current2 = current2.next`
  * if `current1 === null && current2 != null`
    * `tail.next = current2`
  * if `current2 === null && current1 != null`
    * `tail.next = current1`
* Outside of the loop, return the `merged_head` variable.

---

#### Code

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeLists = (head1, head2) => {
  let merged_head;
  let current1;
  let current2;
  if (head1.val <= head2.val) {
    merged_head = head1;
    current1 = merged_head.next;
    current2 = head2;
  } else {
    merged_head = head2;
    current1 = merged_head.next;
    current2 = head1;
  }
  
  let tail = merged_head;
  
  if (current1 === null) {
    tail.next = current2;
    return merged_head;
  }
  
  while (current1 != null && current2 != null) {
    if (current1.val <= current2.val) {
      tail.next = current1;
      tail = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      tail = current2;
      current2 = current2.next;
    }
    
    if (current1 === null && current2 != null) {
      tail.next = current2;
    }
    
    if (current2 === null && current1 != null) {
      tail.next = current1;
    }
  }
  
  return merged_head
};
```

