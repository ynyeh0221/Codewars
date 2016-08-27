function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (!node)
    throw new Error();
  let ind = 0, cur = node.next;
  if (index === 0)
    return node;
  while (cur)
  {
    ind ++;
    if (ind == index)
      return cur;
    cur = cur.next;
  }
  if (index > ind)
    throw new Error();
}
