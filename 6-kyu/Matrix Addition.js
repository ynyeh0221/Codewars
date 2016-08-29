function matrixAddition(a, b){
  let c = [];
  for (let i = 0; i < a.length; i++)
  {
    let temp = [];
    for (let j = 0; j < a[0].length; j++)
      temp.push(a[i][j] + b[i][j]);
    c.push(temp);
  }
  return c;
}
