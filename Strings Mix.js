function mix(s1, s2) {
  // your code
  let f1 = {}, f2 = {};
  for (let i = 0; i < s1.length; i++)
  {
    if (s1[i].charCodeAt() >= 97 && s1[i].charCodeAt() <= 122)
    {
      if (!(s1[i] in f1))
        f1[s1[i]] = 0;
      f1[s1[i]] += 1;
    }
  }
  for (let i = 0; i < s2.length; i++)
  {
    if (s2[i].charCodeAt() >= 97 && s2[i].charCodeAt() <= 122)
    {
      if (!(s2[i] in f2))
        f2[s2[i]] = 0;
      f2[s2[i]] += 1;
    }
  }
  let res = [];
  let used = {};
  for (let k in f1)
  {
    if (f1[k] > 1)
    {
      res.push([1, k, f1[k]]);
      used[k] = res.length-1;
    }
  }
  for (let k in f2)
  {
    if (f2[k] > 1)
    {
      if (k in used && f2[k] > res[used[k]][2])
      {
        res[used[k]][0] = 2;
        res[used[k]][2] = f2[k];
      }
      else if (k in used && f2[k] == res[used[k]][2])
        res[used[k]][0] = 3;
      else if (!(k in used))
        res.push([2, k, f2[k]]);
    }
  }
  res.sort(
    function(a,b) {
      if (a[2] == b[2])
      {
        if (a[0] == b[0])
          return a[1] < b[1] ? -1 : 1;
        return a[0] < b[0] ? -1 : 1;
      }
      return a[2] < b[2] ? 1 : -1;
    }
  );
  let s = "";
  for (let i = 0; i < res.length; i++)
  {
    if (i > 0)
      s += '/';
    if (res[i][0] == 3)
      res[i][0] = '=';
    let temp = "";
    for (let j = 0; j < res[i][2]; j++)
      temp += res[i][1];
    s += res[i][0].toString() + ':' + temp;
  }
  return s;
}
