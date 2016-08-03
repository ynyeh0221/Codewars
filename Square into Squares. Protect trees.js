function decompose(n) {
    // your code
    let res = [];
    let flag = 0;
    function dfs(start, path, n, nsquare)
    {
      if (nsquare === 0)
      {
        flag = 1;
        res = path;
        return;
      }
      if (start === 0)
        return;
      for (let i = 0; i < 2; i ++)
      {
        if (i === 0)
        {
          if (start >= path[path.length-1])
            return;
          let new_n = Math.floor(Math.sqrt(nsquare - start * start));
          let new_nsquare = nsquare - start * start;
          if (new_n >= 0)
          {
            let temp = path.slice();
            temp.push(start);
            dfs(new_n, temp, new_n, new_nsquare);
          }
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
