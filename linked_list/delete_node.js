function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Mod the head in-place
const deleteNode = (head, node) => {
  let curr = head;
  let prev = null;

  while (curr) {
    if (curr.val === node) {
      prev.next = curr.next;
      break;
    }

    prev = curr;
    curr = curr.next;
  }

  console.log({ head });
};

const node = new ListNode(4);
node.next = new ListNode(5);
node.next.next = new ListNode(1);
node.next.next.next = new ListNode(9);

deleteNode(node, 5);

// 4 -> 5 -> 1 -> 9