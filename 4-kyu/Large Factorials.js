function mult(s1, s2)
{
  let res = [];
  for (let i = 0; i < s1.length + s2.length + 1; i++)
    res.push(0);
  s1 = s1.split('').reverse();
  s2 = s2.split('').reverse();
  for (let i = 0; i < s1.length; i++)
  {
    for (let j = 0; j < s2.length; j++)
      res[i+j] += parseInt(s1[i]) * parseInt(s2[j]);
  }
  let carry = 0;
  for (let i = 0; i < res.length; i++)
  {
    let temp = (res[i] + carry) % 10;
    carry = Math.floor((res[i] + carry) / 10);
    res[i] = temp;
  }
  let i;
  for (i = res.length-1; i > 0 && res[i] == 0; i--);
  res = res.slice(0, i+1).reverse().join('');
  return res;
}
function factorial(n){
  let res = '1';
  for (let i = 2; i <= n; i++)
    res = mult(i.toString(), res);
  return res;
}
