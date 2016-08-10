function addition(n1, n2)
{
  let carry = 0, res = '';
  n1 = n1.split('').reverse();
  n2 = n2.split('').reverse();
  for (let i = 0; i < n1.length; i++)
  {
    let temp = parseInt(n1[i]) + parseInt(n2[i]) + carry;
    if (temp < 10)
    {
      res += temp;
      carry = 0;
    }
    else
    {
      res += temp % 10;
      carry = 1;
    }
  }
  return carry === 0 ? res.split('').reverse().join('') : '1' + res.split('').reverse().join('');
}

function add(a, b) {
  while (a.length < b.length)
    a = '0' + a;
  while (b.length < a.length)
    b = '0' + b;
  return addition(a, b);
}
