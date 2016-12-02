function filter(head, p) {
  let ptr = new Node(-1), dummy = ptr;
  while (head)
  {
    if (p(head.data))
    {
      ptr.next = new Node(head.data);
      ptr = ptr.next;
    }
    head = head.next;    
  }
  return dummy.next;
}
