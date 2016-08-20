var digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
function isPolydivisible(s, b){
  //your code here
  let temp = digits.indexOf(s[0]);
  for (let i = 1; i < s.length; i++)
  {
    temp = temp * b + digits.indexOf(s[i]);
    if (temp % (i+1) !== 0)
      return false;
  }
  return true;
}

function getPolydivisible(n, b){
  //your code here
  let pd = ['0'], i  = 1;
  while (pd.length < n)
  {
    let s = '';
    let num = i;
    while (num > 0)
    {
      s += digits[num % b];
      num = Math.floor(num / b);
    }
    s = s.split('').reverse().join('');
    if (isPolydivisible(s, b))
      pd.push(s);
    i += 1;
  }
  return pd[n-1];
}
