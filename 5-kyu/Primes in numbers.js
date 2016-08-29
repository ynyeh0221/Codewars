function primeFactors(n){
  if (n === 0 || n == 1)
    return '(' + n + ')';
  let dic = {};
  for (let i = 2; i <= n; i++)
  {
    while (n % i === 0)
    {
      if (!(i in dic))
         dic[i] = 0;
      dic[i] += 1;
      n = Math.floor(n / i);
    }
  }
  let res = '';
  for (let i in dic)
  {
      if (dic[i] > 1)
        res += '(' + i + '**' + dic[i] + ')';
      else
        res += '(' + i + ')';
  }
  return res;
}
