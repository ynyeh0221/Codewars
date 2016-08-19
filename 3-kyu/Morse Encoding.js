function b2d(s)
{
  let res = 0;
  let neg = false;
  if (s[0] == '1')
  {
    neg = true;
    s = s.split('');
    for (let i = 0; i < s.length; i++)
      s[i] = s[i] == '0' ? '1' : '0';
    s = s.join('');
  }
  return neg ? -(parseInt(s, 2) + 1) : parseInt(s, 2);
}

function d2b(dec,length){
  var out = "";
  while(length--)
    out += (dec >> length ) & 1;    
  return out;  
}

var Morse = {};

Morse.encode = function(message){
  // ·–·–·– ·–·–·– ·–·–·–
  let temp = "";
  for (let i = 0; i < message.length; i++)
  {
    if (message[i] == ' ')
      temp += "0000000";
    else
    {
      if (i > 0 && message[i-1] != ' ')
        temp += "000";
      temp += Morse.alpha[message[i]];
    }
  }
  while (temp.length % 32 != 0)
    temp += '0';
  var res = [];
  for (let i = 0; i < temp.length; i += 32)
    res.push(b2d(temp.substr(i, 32)));
  return res;
};

Morse.decode = function(integerArray){
  // ·–·–·– ·–·–·– ·–·–·–
  let s = "";
  for (let i = 0; i < integerArray.length; i++)
  {
    if (integerArray[i] >= 0)
      s += d2b(integerArray[i], 32);
    else
    {
      let temp = d2b(-integerArray[i]-1, 32);
      temp = temp.split('');
      for (let i = 0; i < temp.length; i++)
        temp[i] = temp[i] == '0' ? '1' : '0';
      temp = temp.join('');
      s += temp;
    }
  }
  let i = s.length - 1;
  for (; i >= 0 && s[i] == '0'; i--);
  s = s.substring(0, i+1);
  s = s.split('0000000')
  for (let i = 0; i < s.length; i++)
    s[i] = s[i].split('000');
  var dec = {};
  for (let k in Morse.alpha)
    dec[Morse.alpha[k]] = k;
  for (let i = 0; i < s.length; i++)
  {
    for (let j = 0; j < s[i].length; j++)
      s[i][j] = dec[s[i][j]];
    s[i] = s[i].join('');
  }
  return s.join(' ');
};

Morse.alpha = {
  'A': '10111',
  'B': '111010101',
  'C': '11101011101',
  'D': '1110101',
  'E': '1',
  'F': '101011101',
  'G': '111011101',
  'H': '1010101',
  'I': '101',
  'J': '1011101110111',
  'K': '111010111',
  'L': '101110101',
  'M': '1110111',
  'N': '11101',
  'O': '11101110111',
  'P': '10111011101',
  'Q': '1110111010111',
  'R': '1011101',
  'S': '10101',
  'T': '111',
  'U': '1010111',
  'V': '101010111',
  'W': '101110111',
  'X': '11101010111',
  'Y': '1110101110111',
  'Z': '11101110101',
  '0': '1110111011101110111',
  '1': '10111011101110111',
  '2': '101011101110111',
  '3': '1010101110111',
  '4': '10101010111',
  '5': '101010101',
  '6': '11101010101',
  '7': '1110111010101',
  '8': '111011101110101',
  '9': '11101110111011101',
  '.': '10111010111010111',
  ',': '1110111010101110111',
  '?': '101011101110101',
  "'": '1011101110111011101',
  '!': '1110101110101110111',
  '/': '1110101011101',
  '(': '111010111011101',
  ')': '1110101110111010111',
  '&': '10111010101',
  ':': '11101110111010101',
  ';': '11101011101011101',
  '=': '1110101010111',
  '+': '1011101011101',
  '-': '111010101010111',
  '_': '10101110111010111',
  '"': '101110101011101',
  '$': '10101011101010111',
  '@': '10111011101011101',
  ' ': '0000000' // Technically is 7 0-bits, but we assume that a space will always be between two other characters
};
