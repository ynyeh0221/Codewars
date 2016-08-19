function pigIt(str){
  //Code here
  var res = "";
  var begin = 0;
  for (var i = 0; i < str.length; i++)
  {
    if (i == begin)
      i += 1;
    if (str[i] != ' ')
      res += str[i];
    else
    {
      res += str[begin] + 'ay ';
      begin = i+1;
    }
  }
  res += str[begin] + 'ay ';
  return res.trim();
}
