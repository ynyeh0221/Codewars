function solution(digits){
  digits = digits.toString();
  let res = 0;
  for (let i = 0; i < digits.length-4; i++)
  {
    let temp = parseInt(digits.substr(i, 5));
    if (temp > res)
      res = temp;
  }
  return res;
}
