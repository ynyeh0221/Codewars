function anyMatch(head, p) {
  while (head)
  {
    if (p(head.data))
      return true;.js
    head = head.next;
  }
  return false;
}

function allMatch(head, p) {
  while (head)
  {
    if (!p(head.data))
      return false;
    head = head.next;
  }
  return true;
}
