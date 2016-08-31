function AtbashCipher(abc) {
  this.encode = function (str) {
    let res = '';
    for (let i = 0; i < str.length; i++)
    {
      let ind = abc.indexOf(str[i]);
      if (ind != -1)
        res += abc[abc.length - 1 - ind];
    }
    return res == '' ? str : res;
  };
  this.decode = function (str) {
    let res = '';
    for (let i = 0; i < str.length; i++)
    {
      let ind = abc.indexOf(str[i]);
      if (ind != -1)
        res += abc[abc.length - 1 - ind];
    }
    return res == '' ? str : res;
  };
}
