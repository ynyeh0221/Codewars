function factorial (n){
  let j = 1;
  for (let i = 1; i <= n; i++)
    j = j * i;
  return j;
}

function numberOfRoutes(m, n){
  return factorial(m+n)/(factorial(m) * factorial(n));
}
