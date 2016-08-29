function matrixMultiplication(a, b){
  let c = [];
  for (let i = 0; i < a.length; i++)
  {
    let temp = [];
    for (let j = 0; j < b[0].length; j++)
    {
      let s = 0;
      for (let k = 0; k < b.length; k++)
        s += a[i][k] * b[k][j];
      temp.push(s);
    }
    c.push(temp);
  }
  return c;
}
