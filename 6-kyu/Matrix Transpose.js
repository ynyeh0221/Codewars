function transpose(matrix) {
  let m = [];
  for (let j = 0; j < matrix[0].length; j++)
  {
    let temp = [];
    for (let i = 0; i < matrix.length; i++)
      temp.push(matrix[i][j]);
    m.push(temp);
  }
  return m;
}
