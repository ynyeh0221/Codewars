function longest(s1, s2) {
  // your code
  let dist = {};
  for (let i = 0; i < s1.length; i++)
    dist[s1[i]] = 1;
  for (let i = 0; i < s2.length; i++)
    dist[s2[i]] = 1;
  let res = [];
  for (let k in dist)
    res.push(k);
  return res.sort().join('');
}
