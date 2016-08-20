function connectFour(board) {
  let winner = null, num = 0;
  function dfs(i, j, dir, who, len)
  {
    if (len == 4)
    {
      winner = who;
      return;
    }
    if (winner || i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] != who)
      return;
    if (dir == 'v')
      dfs(i+1, j, dir, who, len+1);
    else if (dir == 'h')
      dfs(i, j+1, dir, who, len+1);
    else if (dir == 'dl')
      dfs(i+1, j-1, dir, who, len+1);
    else if (dir == 'dr')
      dfs(i+1, j+1, dir, who, len+1);
  }
  for (let i = 0; i < board.length; i++)
  {
    for (let j = 0; j < board[0].length; j++)
    {
      if (board[i][j] != '-')
      {
        num += 1;
        if (!winner)
          dfs(i, j, 'v', board[i][j], 0);
        if (!winner)
          dfs(i, j, 'h', board[i][j], 0);
        if (!winner)
          dfs(i, j, 'dl', board[i][j], 0);
        if (!winner)
          dfs(i, j, 'dr', board[i][j], 0);
      }
    }
  }
  return winner ? winner : num == board.length * board[0].length ? 'draw' : 'in progress';
}
