function sumOfDivided(lst) {
  //your code
  var dic = {};
  for (let i = 0; i < lst.length; i++)
  {
    if (lst[i] >= 0)
    {
      for (let p = 2; p <= lst[i]; p++)
      {
        if (lst[i] % p == 0)
        {
          let prime = true;
          for (k in dic)
          {
            if (p % k === 0 && p != k)
              prime = false;
          }
          if (prime)
          {
            if (!(p in dic))
              dic[p] = 0;
            dic[p] += lst[i];
          }
        }
      }
    }
    else
    {
      for (let p = 2; p <= -lst[i]; p++)
      {
        if (-lst[i] % p == 0)
        {
          let prime = true;
          for (k in dic)
          {
            if (p % k === 0 && p != k)
              prime = false;
          }
          if (prime)
          {
            if (!(p in dic))
              dic[p] = 0;
            dic[p] += lst[i];
          }
        }
      }
    }
  }
  let res = [];
  for (k in dic)
    res.push([parseInt(k,10), dic[k]]);
  return res;
}
