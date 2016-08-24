String.prototype.toAscii85 = function() {
  let pad = '\0', addnum = 0, str = this, res = '', sum = 0;
  while (str.length % 4 !== 0)
  {
    str += pad;
    addnum ++;
  }
  for (let i = 0; i < str.length; i += 4)
  {
    let e = '';
    let temp = str.substr(i, 4);
    for (let j = 0; j < 4; j++)
    {
      let t = temp[j].charCodeAt().toString(2)
      while (t.length != 8)
        t = '0' + t;
      e += t;
    }
    sum = parseInt(e, 2);
    let encode = [];
    for (let j = 0; j < 5; j++)
      encode.push(0);
    for (let j = 4; j >= 0; j--)
    {
      encode[j] = sum % 85;
      sum = Math.floor(sum / 85);
    }
    for (let j = 0; j < 5; j++)
      res += String.fromCharCode(encode[j] + 33);
  }
  res = res.substr(0, res.length - addnum);
  let newres = '', i = 0;
  for (i = 0; i < res.length; i += 5)
    newres += res.substr(i, Math.min(5, res.length - i)) == '!!!!!' ? 'z' : res.substr(i, Math.min(5, res.length - i));
  return '<~' + newres + '~>';
}

String.prototype.fromAscii85 = function() {
  console.log(this)
  let pad = 'u', addnum = 0, s = this.substring(2, this.length - 2).replace(/\s/g, ''), str = '', res = '';
  for (let i = 0; i < s.length; i++)
    str += s[i] == 'z' ? '!!!!!' : s[i];
  while (str.length % 5 !== 0)
  {
    str += pad;
    addnum ++;
  }
  for (let i = 0; i < str.length; i += 5)
  {
    let temp = str.substr(i, 5), decode = [], sum = 0, sum2str = '';
    for (let j = 0; j < 5; j++)
    {
      let t = temp[j].charCodeAt() - 33;
      decode.push(t);
    }
    for (let i = 4; i >= 0; i--)
      sum += decode[i] * Math.pow(85, 4 - i);
    sum2str = sum.toString(2);
    while (sum2str.length % 32 !== 0)
      sum2str = '0' + sum2str;
    for (let i = 0; i < sum2str.length; i += 8)
    {
      let temp = parseInt(sum2str.substr(i, 8), 2);
      res += String.fromCharCode(temp);
    }
  }
  res = res.substr(0, res.length - addnum);
  return res;
}
