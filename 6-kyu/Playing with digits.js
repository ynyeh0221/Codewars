function digPow(n, p){
  let strn = n.toString();
  let sum = 0;
  for (let i = 0; i < strn.length; i++)
  {
    sum += Math.pow(strn[i], p);
    p += 1;
  }
  return sum % n === 0 ? Math.floor(sum / n) : -1;
}
