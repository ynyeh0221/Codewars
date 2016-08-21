function firstNonRepeatingLetter(str) {
  let s = str.toLowerCase();
  let dic = {};
  for (let i in s)
  {
    if (!(s[i] in dic))
      dic[s[i]] = 0;
    dic[s[i]] ++;
  }
  for (let i in s)
  {
    if (dic[s[i]] == 1)
      return str[i];
  }
  return '';
}
