function removeNb (n) {
  let sum = (n + 1) * n / 2;
  let res = [];
  let minx1 = Math.floor(((n - 1) * n / 2) / (n + 1));
  let maxx1 = Math.floor(Math.sqrt(sum + 1) - 1);
  for (let x1 = minx1; x1 <= maxx1; x1 ++)
  {
    let x2 = Math.floor((sum - x1)/(x1 + 1));
    if (x1 + x2 + x1 * x2 == sum)
    {
      res.push([x1, x2]);
      res.push([x2, x1]);
    }
  }
  return res.sort(function(a, b)
  {
    return a[0] >= b[0] ? 1 : -1;
  });;
}
