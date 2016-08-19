function shiftedDiff(first,second){
  // ...
  if (first == second)
    return 0;
  if (first.length != second.length)
    return -1;
  let temp = first[first.length-1] + first.substring(0, first.length-1);
  let ind = 1;
  while (temp != first)
  {
    if (temp == second)
      return ind;
    temp = temp[temp.length-1] + temp.substring(0, temp.length-1);
    ind += 1;
  }
  return -1;
}
