function isvaild(i, j, puzzle, num)
{
  for (let k = 0; k < puzzle[i].length && k != j; k++)
  {
    if (puzzle[i][k] == num)
      return false;
  }
  for (let k = 0; k < puzzle.length && k != i; k++)
  {
    if (puzzle[k][j] == num)
      return false;
  }
  let ii = Math.floor(i / 3), jj = Math.floor(j / 3);
  for (let k = 3*ii; k < 3*ii + 3; k++)
  {
    for (let l = 3*jj; l < 3*jj + 3; l++)
    {
      if (k == i && l == j)
        continue;
      if (puzzle[k][l] == num)
        return false;
    }
  }
  return true;
}

function validSolution(board){
  //TODO
  for (let i = 0; i < board.length; i++)
  {
    for (let j = 0; j < board[0].length; j++)
    {
      if (!isvaild(i, j, board, board[i][j]))
        return false;
    }
  }
  return true;
}
