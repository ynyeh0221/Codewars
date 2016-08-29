function lookSay(n){
  let s = n.toString();
  let res = "";
  let count = 1;
  for (let j = 1; j < s.length; j++)
  {
      if (s[j] != s[j-1])
      {
          res += count.toString() + s[j-1];
          count = 0;
      }
      count += 1;
  }
  res += count.toString() + s[s.length-1];
  return parseInt(res);
}
