let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,.? -';
device.decode = function (w) {
  let res = '', dic = {};
  for (let j = 0; j < letters.length; j++)
  {
    let temp = '';
    for (let i = 0; i < w.length; i++)
      temp += letters[j];
    dic[device.encode(temp)] = letters[j];
  }
  for (let i = 0; i < w.length; i++)
  {
    for (let k in dic)
    {
      if (k[i] == w[i])
        res += dic[k];
    }
  }
  return res; 
}
