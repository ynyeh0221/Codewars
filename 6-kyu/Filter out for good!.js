Array.prototype.remove = function (pred) {
  //code me
  let res = [], arr = [];
  for (let i = 0; i < this.length; i++)
  {
      if (pred(this[i]))
        res.push(this[i]);
      else
        arr.push(this[i]);
  }
  this.length = arr.length;  
  for (let i = 0; i < arr.length; i++)
    this[i] = arr[i];
  return res;
}
