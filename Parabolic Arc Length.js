// n numbers of intervals
function f(x)
{
  return x * x;
}
function lenCurve(n) {
    // your code
    let res = 0;
    let h = 1 / n;
    for (let i = 0; i < 1; i += h)
    {
      res += Math.sqrt(Math.pow(h, 2) + Math.pow(f(i) - f(i + h), 2));
      n -= 1;
      if (n === 0)
        break;
    }
    return parseFloat(res.toFixed(9));
}
