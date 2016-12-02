function map(head, f) {
  let newhead = new Node(-1), dummy = newhead;
  while (head)
  {
    newhead.next = new Node(f(head.data));
    newhead = newhead.next;
    head = head.next;
  }
  return dummy.next;
}
