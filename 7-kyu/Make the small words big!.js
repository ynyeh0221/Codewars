function smallWordHelper(s){
  s = s.toLowerCase().split(' ');
  for (let i = 0; i < s.length; i++)
  {
    if (s[i].length <= 3)
      s[i] = s[i].toUpperCase();
    else
    {
      let temp = '';
      for (let j = 0; j < s[i].length; j++)
      {
        if (s[i][j] == 'a' || s[i][j] == 'e' || s[i][j] == 'i' || s[i][j] == 'o' || s[i][j] == 'u')
          continue;
        temp += s[i][j];
      }
      s[i] = temp;
    }
  }
  return s.join(' ');
}
