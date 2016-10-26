function splitOddAndEven(n) {
  let s = n.toString();
  let odd = parseInt(s[0],10) % 2 ? true : false;
  let temp = 0;
  let res = [];
  for (let i = 0; i < s.length; i++)
  {
      if (odd)
      {
          let cur_digit = parseInt(s[i],10);
          if (cur_digit % 2 != 0)
              temp = temp * 10 + cur_digit;
          else
          {
              res.push(temp);
              temp = cur_digit;
              odd = false;
          }
      }
      else
      {
          let cur_digit = parseInt(s[i],10);
          if (cur_digit % 2 === 0)
              temp = temp * 10 + cur_digit;
          else
          {
              res.push(temp);
              temp = cur_digit;
              odd = true;
          }
      }
  }
  res.push(temp);
  return res;
}
