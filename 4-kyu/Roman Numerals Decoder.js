function solution(roman){
  var convert = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
  var res = convert[roman[0]];
  for (let i = 1; i < roman.length; i++)
  {
    if (convert[roman[i]] <= convert[roman[i-1]])
      res += convert[roman[i]];
    else
      res += convert[roman[i]] - 2 * convert[roman[i-1]];
  }
  return res;
}
