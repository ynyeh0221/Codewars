var sum = function(number)
{
  var T = [];
  for (let i = 0; i < number+1; i++)
  {
    T.push([]);
    for (let j = 0; j < number+1; j++)
      T[i].push(null);
  }
  function calc(n1, n2)
  {
    if (n2 == 0)
      return 0;
    if (n1 == 0)
      return 1;
    if (n1 < 0)
      return 0;
    if (!T[n1][n2])
      T[n1][n2] = calc(n1-n2, n2) + calc(n1, n2-1);
    return T[n1][n2];
  }
  return calc(number, number);
}
