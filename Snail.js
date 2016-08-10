snail = function(array) {
  if (array[0].length == 0)
    return [];
  let res = [];
  function dfs(i, j, mini, maxi, minj, maxj, dir)
  {
    if (res.length == array.length * array.length)
      return;
    if (dir == 'R')
    {
      while (j < maxj)
      {
        res.push(array[i][j]);
        j += 1;
      }
      dfs(i+1, j-1, mini, maxi, minj, maxj-1, 'D');
    }
    else if (dir == 'D')
    {
      while (i < maxi)
      {
        res.push(array[i][j]);
        i += 1;
      }
      dfs(i-1, j-1, mini, maxi-1, minj, maxj, 'L');
    }
    else if (dir == 'L')
    {
      while (j > minj)
      {
        res.push(array[i][j]);
        j -= 1;
      }
      dfs(i-1, j+1, mini, maxi, minj+1, maxj, 'U');
    }
    else
    {
      while (i > mini)
      {
        res.push(array[i][j]);
        i -= 1;
      }
      dfs(i+1, j+1, mini+1, maxi, minj, maxj, 'R');
    }
  }
  dfs(0, 0, 0, array.length, -1, array.length, 'R');
  return res;
}
