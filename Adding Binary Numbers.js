function add(a,b){
  // Happy Coding ^_^
  a = a.split('').reverse().map(function (x) { 
    return parseInt(x, 10); 
});
  b = b.split('').reverse().map(function (x) { 
    return parseInt(x, 10); 
});
  let carry = 0;
  let res = [];
  for (let i = 0; i < Math.min(a.length, b.length); i++)
  {
    let temp = a[i] + b[i] + carry;
    if (temp < 2)
    {
      res.push(temp);
      carry = 0;
    }
    else
    {
      res.push(temp - 2);
      carry = 1;
    }
  }
  for (let i = a.length; i < b.length; i++)
  {
    let temp = b[i] + carry;
    if (temp < 2)
    {
      res.push(temp);
      carry = 0;
    }
    else
    {
      res.push(temp - 2);
      carry = 1;
    }
  }
  for (let i = b.length; i < a.length; i++)
  {
    let temp = a[i] + carry;
    if (temp < 2)
    {
      res.push(temp);
      carry = 0;
    }
    else
    {
      res.push(temp - 2);
      carry = 1;
    }
  }
  if (carry === 0)
  {
    let i;
    for (i = res.length-1; i > 0 && res[i] === 0; i--);
    res = res.slice(0, i+1);
  }
  return carry === 0 ? res.reverse().join('') : '1' + res.reverse().join('');
};
