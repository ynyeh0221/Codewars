function isvaild(i, j, puzzle, num)
{
  for (let k = 0; k < puzzle[i].length; k++)
  {
    if (puzzle[i][k] == num)
      return false;
  }
  for (let k = 0; k < puzzle.length; k++)
  {
    if (puzzle[k][j] == num)
      return false;
  }
  let ii = Math.floor(i / 3), jj = Math.floor(j / 3);
  for (let k = 3*ii; k < 3*ii + 3; k++)
  {
    for (let l = 3*jj; l < 3*jj + 3; l++)
    {
      if (puzzle[k][l] == num)
        return false;
    }
  }
  return true;
}

function sudoku(puzzle) {
  //return the solved puzzle as a 2d array of 9 x 9 
  let res = [];
  let flag = 0;
  function dfs(puzzle, index)
  {
    if (index > 80)
    {
      if (flag === 0)
        res = puzzle.slice();
      flag = 1;
      return;
    }
    let i = Math.floor(index / 9), j = index % 9;
    if (puzzle[i][j] !== 0)
      return dfs(puzzle, index + 1);
    for (let v = 1; v <= 9; v++)
    {
      if (isvaild(i, j, puzzle, v))
      {
        puzzle[i][j] = v;
        dfs(puzzle, index + 1);
      }
    }
    if (flag === 0)
      puzzle[i][j] = 0;
  }
  dfs(puzzle, 0)
  return res
}
