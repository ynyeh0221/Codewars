function reverseCase(string) {
  let res = '', temp = string[0];
  for (let i = 1; i < string.length; i++)
  {
    if (string[i] == string[i-1])
      temp += string[i];
    else
    {
      if (temp.length > 1)
        temp = temp[0] == temp[0].toUpperCase() ? temp.toLowerCase() : temp.toUpperCase();
      res += temp;
      temp = string[i];
    }
  }
  if (temp.length > 1)
    temp = temp[0] == temp[0].toUpperCase() ? temp.toLowerCase() : temp.toUpperCase();
  return res + temp;
}
