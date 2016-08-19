function going(n) {
    // your code
    let d = 1;
    let res = 1;
    for (let i = n; i > 1; i --)
    {
      d *= i;
      res += 1 / d;
    }
    return Math.floor(res * 1e6) / 1e6;
}
