function dblLinear(n) {
  let num = 2, ind = 1, s = new Set();
  s.add(1);
  while (true)
  {
    let temp = num, check = 0;
    if ((temp - 1) % 3 == 0)
    {
      temp = Math.floor((temp - 1) / 3);
      if (s.has(temp))
        check = 1;
    }
    temp = num;
    if ((temp - 1) % 2 == 0)
    {
      temp = Math.floor((temp - 1) / 2);
      if (s.has(temp))
        check = 1;
    }
    if (check == 1)
    {
      s.add(num);
      ind ++;
    }
    if (ind == n+1)
      return num;
    num += 1;
  }
}
