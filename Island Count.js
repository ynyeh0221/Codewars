function countIslands (mapStr) {
  mapStr = mapStr.split('\n');
  for (let i = 0; i < mapStr.length; i++)
    mapStr[i] = mapStr[i].split('');
  let num = 0;
  for (let i = 0; i < mapStr.length; i++)
  {
    for (let j = 0; j < mapStr[0].length; j++)
    {
      if (mapStr[i][j] == '0')
      {
        num += 1;
        dfs(i, j, mapStr);
      }
    }
  }
  return num;
}

function dfs(i, j, map)
{
  if (i < 0 || j < 0 || i >= map.length || j >= map[0].length || map[i][j] != '0')
    return;
  map[i][j] = '*';
  dfs(i-1, j, map);
  dfs(i+1, j, map);
  dfs(i, j-1, map);
  dfs(i, j+1, map);
}
