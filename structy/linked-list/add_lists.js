class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (head1, head2) => {
  let sum = 0;
  let curr1 = head1;
  let multiplier = 1;

  while (curr1 != null) {
    sum += curr1.val * multiplier;
    curr1 = curr1.next;
    multiplier *= 10;
  }

  let curr2 = head2;
  multiplier = 1;

  while (curr2 != null) {
    sum += curr2.val * multiplier;
    curr2 = curr2.next;
    multiplier *= 10;
  }

  let strSum = String(sum);
  let val = parseInt(strSum[strSum.length - 1], 10);
  let head = new Node(val);

  if (strSum.length === 1) {
    return head;
  }

  val = parseInt(strSum[strSum.length - 2]);
  let curr = new Node(val);
  head.next = curr;

  if (strSum.length === 2) {
    return head;
  }

  for (let i = strSum.length - 3; i >= 0; i--) {
    val = parseInt(strSum[i], 10);

    let node = new Node(val);

    curr.next = node;
    curr = node;    
  }

  return head;
};

const a1 = new Node(9);
const a2 = new Node(8);
a1.next = a2;
// 9 -> 8

const b1 = new Node(7);
const b2 = new Node(4);
b1.next = b2;
// 7 -> 4

console.log(addLists(a1, b1));
// 6 -> 3 -> 1