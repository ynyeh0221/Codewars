function Roman() {};

var RomanNumerals = new Roman();

Roman.prototype.fromRoman = function(roman){
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

Roman.prototype.toRoman = function(num) {
  if (!+num)
    return false;
  var digits = String(+num).split(""),
      key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
             "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
             "","I","II","III","IV","V","VI","VII","VIII","IX"],
      roman = "",
      i = 3;
  while (i--)
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}
