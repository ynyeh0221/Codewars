var toint = {'hundred': 100, 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 12, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eightteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90};
var special = {'thousand': 1000, 'million': 1000000};
function parseInt(string) {
  string = string.split(' ');
  let res = 0, temp = 0;
  for (let i = 0; i < string.length; i++)
  {
    if (string[i] == 'and')
      continue;
    else if (string[i] in toint)
    {
      if (string[i] == 'hundred')
        temp *= toint[string[i]];
      else
        temp += toint[string[i]];
    }
    else if (string[i] in special)
    {
      temp *= special[string[i]];
      res += temp;
      temp = 0;
    }
    else
    {
      string[i] = string[i].split('-');
      temp += toint[string[i][0]] + toint[string[i][1]];
    }
  }
  res += temp;
  return res;
}
