var countChange = function(money, coins) {
  coins = coins.sort((a,b) => a-b);
  let res = 0;
  function dfs(m, c, start, path)
  {
    if (m == 0)
    {
      res += 1;
      return;
    }
    for (let i = start; i < c.length; i++)
    {
      if (c[i] <= m)
      {
        path.push(c[i]);
        dfs(m-c[i], c, i, path);
        path.pop();
      }
    }
  }
  dfs(money, coins, 0, []);
  return res;
}
