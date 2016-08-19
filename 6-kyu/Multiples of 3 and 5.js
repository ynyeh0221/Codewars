function solution(number){
  var res = 0;
  for (var i = 3; i < number; i += 3)
  {
    res += i;
  }
  for (i = 5; i < number; i += 5)
  {
    if (i % 3 != 0)
      res += i;
  }
  return res;
}
