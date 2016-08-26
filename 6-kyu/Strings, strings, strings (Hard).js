Array.prototype.toString = function()
{
  return tostr(this.slice());
}
function tostr(arr)
{
  for (let i in arr)
  {
    if (typeof arr[i] == 'string')
      arr[i] = '\'' + arr[i] + '\'';
    else if (typeof arr[i] == 'array')
      arr[i] = tostr(arr[i]);
  }
  return '[' + arr.join(',') + ']';
}
