var codes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
String.prototype.toBase64 = function()
{
  let encode = '', res = '';
  for (let i = 0; i < this.length; i++)
  {
    let temp = this[i].charCodeAt().toString(2);
    while (temp.length < 8)
      temp = '0' + temp;
    encode += temp;
  }
  let added_zeros = 0;
  while (encode.length % 6 !== 0)
  {
    encode += '0';
    added_zeros += 1;
  }
  for (let i = 0; i < encode.length; i += 6)
    res += codes[parseInt(encode.substr(i, 6),2)];
  for (let i = 0; i < added_zeros; i += 2)
    res += '=';
  return res;
}

String.prototype.fromBase64 = function()
{
  let decode = '', res = '';
  for (let i = 0; i < this.length; i++)
  {
    let temp = codes.indexOf(this[i]).toString(2);
    while (temp.length < 6)
      temp = '0' + temp;
    decode += temp;
  }
  for (let i = 0; i < decode.length; i += 8)
    res += String.fromCharCode(parseInt(decode.substr(i, 8), 2));
  return res;
}
