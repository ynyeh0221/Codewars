function List() {}

function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;
EmptyList.prototype.toString = function() {
  return "()";
};
EmptyList.prototype.isEmpty = function() {
  return true;
};
EmptyList.prototype.length = function() {
  return 0;
};
EmptyList.prototype.push = function(x) {
  return new ListNode(x, this);
};
EmptyList.prototype.remove = function(x) {
  return this;
};
EmptyList.prototype.append = function(xs) {
  return xs;
};

function ListNode(value, next) {
  this.value = value;
  this.next = next;
}
ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() {
  return false;
};
ListNode.prototype.toString = function() {
  let vals = [this.value], nx = this.next;
  while (!(nx instanceof EmptyList))
  {
    vals.push(nx.value);
    nx = nx.next;
  }
  return "(" + vals.join(" ") + ")";
};
ListNode.prototype.head = function() {
  return this.value;
};
ListNode.prototype.tail = function() {
  return this.next;
};
ListNode.prototype.length = function() {
  let nx = this.next, len = 0;
  while (!(nx instanceof EmptyList))
  {
    len++;
    nx = nx.next;
  }
  return len + 1;
};
ListNode.prototype.push = function(x) {
  return new ListNode(x, this);
};        
ListNode.prototype.remove = function(x) {
  let remainings = [], res_head = this, nx = this, nums = 0;
  while (!(nx instanceof EmptyList))
  {
    if(nx.value == x)
    {
      nums = remainings.length;
      res_head = nx.next;
    }
    else
      remainings.push(nx.value);
    nx = nx.next;
  }
  remainings = remainings.slice(0,nums);
  var res = res_head;
  while (remainings.length > 0)
    res = res.push(remainings.pop());
  return res;
};
ListNode.prototype.append = function(xs) {
  var vals = [], nx = this;
  while (!(nx instanceof EmptyList))
  {
    vals.push(nx.value);
    nx = nx.next;
  }
  var res = xs.push(vals.pop());
  while (vals.length > 0)
    res = res.push(vals.pop());
  return res;
};
