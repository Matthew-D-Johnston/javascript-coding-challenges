##### Structy > Linked Lists

---

## zipper lists

#### Problem

##### Instructions:

Write a function, *zipperLists*, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this **in-place**, by mutating the original Nodes.

You may assume that both input lists are non-empty.

##### Definitions/Rules (implicit and explicit):

* zipper the two lists: combine the two lists into one list comprised of alternating nodes from each list; if one list is longer than the other, than the resulting list should terminate with the remaining nodes.
* return the head of the resulting list.
* mutate the original Nodes.
* assume that both input lists are non-empty.

##### Input/Output:

* Input: the heads of two separate linked lists.
* Output: return the head of the combined linked list.

##### Mental Model:

Iterate over each node of each list. Start with the head of the first list and then set it's next value to the head of the other list. Then set the next value of the other head to the next node of the other list. Continue to do this until you get to the end of one of the lists. Once the end of one of the lists is reached, make the final connection to the next node of the remaining list. Return the head of the first linked list, since this will be the head of the new combined list.

---

#### Examples / Test Cases

```
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f

const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4

zipperLists(s, one);
// s -> 1 -> t -> 2 -> 3 -> 4

const w = new Node("w");

// w

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 

zipperLists(w, one);
// w -> 1 -> 2 -> 3

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 

const w = new Node("w");
// w

zipperLists(one, w);
// 1 -> w -> 2 -> 3
```

---

#### Data Structures

##### Input:

* Two Nodes (representing the heads of the two linked lists)

##### Output:

* One Node (representing the head of the new linked list)

---

#### Algorithm

* Create a `newListHead` variable and assign the first head argument to it.
* Create a `current1` and `current2` variable and assign them to the heads of the linked lists, respectively.
* Then create a `next1` and `next2` variable and assign them to the next values of the heads of the linked lists.
* Initiate a `while` loop on the condition `while (current1 != null && current2 != null)`
  * Inside the loop set `current1.next = current2`.
  * Then set `current1 = next1`
  * Then set `next1 = current1.next` (set if conditional here in case `current1 = null`)
  * Then set `current2.next = current1`(This also needs the conditional for the same condition)
  * Then set `current2 = next2`
  * Then set `next2 = current2.next` (set if conditional here in case `current2 = null`)
  * 



---

#### Code

```javascript
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const zipperLists = (head1, head2) => {
  let newListHead = head1;
  let current1 = head1;
  let current2 = head2;
  let next1 = current1.next;
  let next2 = current2.next;
  
  while (current1 != null && current2 != null) {
    current1.next = current2;
    current1 = next1;
    
    if (current1 != null) {
      next1 = current1.next;
      
      current2.next = current1;
    }
    
    current2 = next2;
    
    if (current2 != null) {
      next2 = current2.next;
    }
  }
  
  return newListHead;
};
```

