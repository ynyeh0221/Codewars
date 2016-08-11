function hamming (n) {
  let res = [1], visited = {};
  let i2 = 0, i3 = 0, i5 = 0;
  for (let i = 1; i < n; i++)
  {
    let temp = Math.min(2 * res[i2], 3 * res[i3], 5 * res[i5]);
    if (temp == 2 * res[i2])
      i2 += 1;
    else if (temp == 3 * res[i3])
      i3 += 1;
    else
      i5 += 1;
    if (!(temp in visited))
    {
      res.push(temp);
      visited[temp] = 1;
    }
    else
      i -= 1;
  }
  return res[n-1];
}
