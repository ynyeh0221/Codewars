var float2bin = function(input) {
  if (input == 0)
    return '';
  if (input == 1)
    return '00111111100000000000000000000000';
  if (typeof input == "string")
    input = parseFloat(input)
  let sign = input >= 0 ? '0' : '1';
  input = Math.abs(input);
  let i = Math.floor(input), f = input - i, res = i.toString(2), leftshift = 0;
  leftshift = res.length-1;
  res = res.substring(1, res.length);
  if (leftshift > 0)
  {
    while (res.length < 23)
    {
      f *= 2
      if (f > 1)
      {
        res += '1';
        f -= 1;
      }
      else if (f == 1)
      {
        res += '1';
        f -= 1;
      }
      else
        res += '0';
    }
  }
  else
  {
    while (res.length < 24)
    {
      f *= 2
      if (f >= 1)
      {
        res += '1';
        f -= 1;
      }
      else
      {
        if (res == '')
          leftshift -= 1;
        else
          res += '0';
      }
    }
    leftshift -= 1;
    res = res.substring(1, res.length);
  }
  let e = (leftshift + 127).toString(2);
  while (e.length < 8)
    e = '0' + e;
  return sign + e + res;
}
