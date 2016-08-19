function totalIncDec(x){
  if (x === 0)
    return 1;
  let table = [];
  for (let i = 0; i < 10; i++)
  {
    table.push([]);
    for (let j = 0; j < x; j++)
    {
      if (i < 9)
        table[i].push(0);
      else
        table[i].push(1);
    }
  }
  for (let i = 0; i < 10; i++)
    table[i][0] = 10 - i;
  for (let j = 1; j < x; j++)
  {
    for (let i = 8; i >= 0; i--)
      table[i][j] = table[i][j-1] + table[i+1][j]; 
  }
  let inc = table[0][x-1];
  let des = 0;
  for (let j = 0; j < x; j++)
    des += table[0][j];
  return inc + des - x * 10;
}
