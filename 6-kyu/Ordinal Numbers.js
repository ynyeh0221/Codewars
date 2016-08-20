let ords = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
function ordinal(number, brief) {
  if (number % 100 == 11)
    return 'th';
  else if (number >= 11 && number <= 19)
    return 'th';
  else
  {
    let temp = number % 10;
    if (temp == 2 || temp == 3)
      return brief ? 'd' : ords[temp];
    else
      return ords[temp];
  }
}
