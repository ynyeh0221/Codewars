function listToArray(list) {
  var res = [];
  while (list != null) {
    res.push(list.value);
    list = list.next;
  }
  return res;
}
