function isValidIP(str) {
  str = str.split('.');
  if (str.length == 4)
  {
    for (let i = 0; i < str.length; i++)
    {
      if (!(/^\d+$/.test(str[i])) || (str[i][0] == '0' && str[i] != '0') || (parseInt(str[i], 10) > 255))
        return false;
    }
    return true;
  }
  return false;
}
