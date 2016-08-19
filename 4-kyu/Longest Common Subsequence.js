function LCS(x, y) {
  let T = [];
  for (let i = 0; i < x.length+1; i++)
  {
    T.push([]);
    for (let j = 0; j < y.length+1; j++)
      T[i].push(0);
  }
  for (let i = 0; i <= x.length; i++)
   {
     for (let j = 0; j <= y.length; j++)
     {
       if (i === 0 || j === 0)
         T[i][j] = 0;  
       else if (x[i-1] == y[j-1])
         T[i][j] = T[i-1][j-1] + 1;  
       else
         T[i][j] = Math.max(T[i-1][j], T[i][j-1]);
     }
   }
   let i = x.length, j = y.length, index = T[x.length][y.length];
   let res = [];
   for (let i = 0; i < index+1; i++)
     res.push('');
   while (i > 0 && j > 0)
   {
      if (x[i-1] == y[j-1])
      {
          res[index-1] = x[i-1];
          i -= 1;
          j -= 1;
          index -= 1;
      }
      else if (T[i-1][j] > T[i][j-1])
         i -= 1;
      else
         j -= 1;
   }
   return res.join('');
}
