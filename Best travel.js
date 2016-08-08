function chooseBestSum(t, k, ls) {
    // your code
    if (ls.length < 3)
      return null;
    let res = 0;
    function dfs(t, k, ls, start, path)
    {
      if (path.length == k)
      {
        let sum = path.reduce(function(a, b) {
          return a + b;
        }, 0);
        if (sum <= t)
          res = Math.max(res, sum);
        return;
      }
      for (let i = start; i < ls.length; i++)
      {
        path.push(ls[i]);
        dfs(t, k, ls, i+1, path);
        path.pop();
      }
    }
    dfs(t, k, ls, 0, []);
    return res === 0 ? null : res;
}
