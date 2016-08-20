function sqrtApproximation(number) {
  let l = 1, r = number;
  if (l*l == number)
    return l;
  else if (r * r == number)
    return r;
  while (r - l > 1)
  {
    let mid = (l+r) >> 1, temp = mid * mid;
    if (temp == number)
      return mid;
    else if (temp > number)
      r = mid;
    else
      l = mid;
  }
  return [l, r];
}
