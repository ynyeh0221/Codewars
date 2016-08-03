// Maximum call stack size exceeded when n = 7100

function decompose(n) {
    // your code
    let res = [];
    let flag = 0;
    function dfs(start, path, n, nsquare)
    {
      let temp = 0;
      for (let i = 0; i < path.length; i++)
        temp += Math.pow(path[i], 2);
      if (temp > nsquare || (temp < nsquare && start == 0))
        return;
      if (temp == nsquare)
      {
        flag = 1;
        res = path;
        return;
      }
      for (let i = 0; i < 2; i ++)
      {
        if (i === 0)
        {
          let temp = path.slice();
          temp.push(start)
          dfs(start - 1, temp, n, nsquare);
        }
        else
          return dfs(start - 1, path, n, nsquare);
        if (flag == 1)
          return;
      }
    }
    dfs(n-1, [], n, Math.pow(n, 2));
    return res.length === 0 ? null : res.reverse();
}
