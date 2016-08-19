function pascalsTriangle(n) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
  if (n == 1) return [1];
  else if (n == 2) return [1,1,1];
  var res = [1,1,1];
  for (let i = 2; i < n; i++)
  {
    let temp = res.slice(res.length-i, res.length);
    res.push(1);
    for (let j = 1; j < i; j++)
      res.push(temp[j] + temp[j-1]);
    res.push(1);
  }
  console.log(res);
  return res;
}
