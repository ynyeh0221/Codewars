var Sudoku = function(data) 
{
  //   Private methods
  // -------------------------
  this.N = data.length;
  this.data = data;

  //   Public methods
  // -------------------------
  this.isValid = function() {
      // YOUR SOLUTION
      console.log(this.data)
      for (let i = 0; i < this.data.length; i ++)
      {
        if (this.data[i].length != this.N)
          return false;
        for (let j = 0; j < this.data[i].length; j++)
        {
          if (!isNumeric(this.data[i][j]) || this.data[i][j] > this.N || this.data[i][j] < 1)
            return false;
          if (!isvaild(i, j, this.data, this.data[i][j]))
            return false;
        }
      }
      return true;
    }
};

function isvaild(i, j, puzzle, num)
{
  let nr = Math.floor(Math.sqrt(puzzle.length));
  for (let k = 0; k < puzzle[i].length; k++)
  {
    if (k != j && puzzle[i][k] == num)
      return false;
  }
  for (let k = 0; k < puzzle.length; k++)
  {
    if (k!= i && puzzle[k][j] == num)
      return false;
  }
  let ii = Math.floor(i / nr), jj = Math.floor(j / nr);
  for (let k = nr*ii; k < nr*ii + nr; k++)
  {
    for (let l = nr*jj; l < nr*jj + nr; l++)
    {
      if (k != i && l != j && puzzle[k][l] == num)
        return false;
    }
  }
  return true;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
