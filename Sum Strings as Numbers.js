function sumStrings(a,b) { 
  let carry = 0, res = '';
  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');
  for (let i = 0; i < Math.min(a.length, b.length); i++)
  {
    let temp = parseInt(a[i]) + parseInt(b[i]) + carry;
    if (temp < 10)
    {
      res += temp.toString();
      carry = 0;
    }
    else
    {
      res += (temp % 10).toString();
      carry = 1;
    }
  }
  if (a.length > b.length)
  {
    for (let i = b.length; i < a.length; i++)
    {
      let temp = parseInt(a[i]) + carry;
      if (temp < 10)
      {
        res += temp.toString();
        carry = 0;
      }
      else
      {
        res += (temp % 10).toString();
        carry = 1;
      }
    }
  }
  else
  {
    for (let i = a.length; i < b.length; i++)
    {
      let temp = parseInt(b[i]) + carry;
      if (temp < 10)
      {
        res += temp.toString();
        carry = 0;
      }
      else
      {
        res += (temp % 10).toString();
        carry = 1;
      }
    }
  }
  let i = res.length-1;
  for (i = res.length-1; carry === 0 && i > 0 && res[i] == '0'; i--);
  res = res.substring(0, i+1);
  return carry === 0 ? res.split('').reverse().join('') : '1' + res.split('').reverse().join('');
}
