var CaesarCipher = function (shift) {
  this.n = shift;
};

CaesarCipher.prototype.encode = function(str)
{
  str = str.toLowerCase().split('');
  for (let i = 0; i < str.length; i++)
  {
    if (/^[a-z]$/.test(str[i]))
      str[i] = String.fromCharCode((str[i].charCodeAt() - 97 + this.n) % 26 + 97);
  }
  return str.join('').toUpperCase();
}

CaesarCipher.prototype.decode = function(str)
{
  str = str.toLowerCase().split('');
  for (let i = 0; i < str.length; i++)
  {
    if (/^[a-z]$/.test(str[i]))
      str[i] = String.fromCharCode((str[i].charCodeAt() - 97 + 26 - this.n) % 26 + 97);
  }
  return str.join('').toUpperCase();
}
