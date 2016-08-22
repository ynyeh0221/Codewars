function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  if (!head)
    return head;
  let dummy = new Node(0), start = head;
  dummy.next = head;
  while (head)
  {
    while (head.next && head.data == head.next.data)
      head = head.next;
    head = head.next;
    start.next = head;
    start = head;
  }
  return dummy.next;
}
