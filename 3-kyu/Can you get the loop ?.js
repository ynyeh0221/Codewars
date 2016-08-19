function loop_size(node){
  let p1 = node, p2 = node.getNext();
  while (p1 !== p2)
  {
    p2 = p2.getNext().getNext();
    p1 = p1.getNext();
  }
  let len = 1;
  p1 = p1.getNext();
  while (p1 !== p2)
  {
    p1 = p1.getNext();
    len += 1;
  }
  return len;
}
