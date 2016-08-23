function minus(a,b)
{
  a = a.split('').reverse().map(function(i){ return parseInt(i, 10); });
  b = b.split('').reverse().map(function(i){ return parseInt(i, 10); });
  let res = [];
  for (let i = 0; i < a.length; i++)
  {
    if (i >= b.length)
      res.push(a[i]);
    else
    {
      if (a[i] >= b[i])
        res.push(a[i] - b[i]);
      else
      {
        a[i+1] --;
        res.push(a[i] + 10 - b[i]);
      }
    }
  }
  i = res.length-1;
  for (; i > 0 && res[i] == '0'; i--);
  res = res.slice(0, i+1);
  return res.reverse().join('');
}

function subtract(a, b)
{
  let a_is_large = true;
  let i = 0;
  for (; i < a.length && a[i] == '0'; i++);
  a = a.substring(i, a.length);
  i = 0;
  for (; i < b.length && b[i] == '0'; i++);
  b = b.substring(i, b.length);
  if (a.length < b.length)
    a_is_large = false;
  else if (a.length == b.length)
  {
    for (let i = 0; i < a.length; i++)
    {
      if (a[i] < b[i])
      {
        a_is_large = false;
        break;
      }
      else if (a[i] > b[i])
      {
        a_is_large = true;
        break;
      }
    }
  }
  if (a_is_large)
    return minus(a, b);
  else
    return '-' + minus(b, a);
}
