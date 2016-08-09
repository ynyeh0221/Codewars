function validateBattlefield(field) {
  let ships = {};
  let len = 0; // length of each ship
  let direction; // dfs direction
  let invalid = false; // check for dfs direction changing => ship contact
  function dfs(i, j, field, dir)
  {
    if (i < 0 || j < 0 || i >= field.length || j >= field[0].length || field[i][j] != '1')
      return;
    if (dir != direction)
      invalid = true;
    len += 1;
    field[i][j] = 2; // visited
    dfs(i-1, j, field, 'u');
    dfs(i+1, j, field, 'd');
    dfs(i, j-1, field, 'l');
    dfs(i, j+1, field, 'r');
    dfs(i-1, j-1, field, 'ul'); // check for contact
    dfs(i-1, j+1, field, 'ur'); // check for contact
    dfs(i+1, j-1, field, 'dl'); // check for contact
    dfs(i+1, j+1, field, 'dr'); // check for contact
  }
  for (let i = 0; i < field.length; i++)
  {
    for (let j = 0; j < field[0].length; j++)
    {
      if (field[i][j] == 1)
      {
        direction = field[i][j+1] == 1 ? 'r' : 'd';
        dfs(i, j, field, direction);
        if (invalid == true)
        {
          return false;
          invalid = false;
        }
      }
      if (len > 0)
      {
        if (!(len in ships))
          ships[len] = 0;
        ships[len] += 1;
      }
      len = 0;
    }
  }
  for (let i = 1; i <= 4; i++)
  {
    let k = i.toString();
    if (!(k in ships) || ships[k] != 4 - i + 1)
      return false;
    delete ships[k];
  }
  for (let k in ships)
    return false;
  return true;
}
