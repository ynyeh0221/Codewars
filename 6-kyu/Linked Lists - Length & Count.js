function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let len = 0;
  while (head)
  {
    len ++;
    head = head.next;
  }
  return len;
}

function count(head, data) {
  let c = 0;
  while (head)
  {
    if (head.data == data)
      c ++;
    head = head.next;
  }
  return c;
}
