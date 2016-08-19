function revrot(str, sz) {
    // your code
    let res = '';
    if (sz === 0 || str == '')
      return res;
    for (let i = 0; i < str.length; i += sz)
    {
      if (i + sz > str.length)
        break;
      let temp = str.substring(i, i + sz);
      let sum = 0;
      for (let j = 0; j < sz; j++)
        sum += parseInt(Math.pow(temp[j], 3));
      if (sum % 2 === 0)
        res += temp.split('').reverse().join('');
      else
        res += temp.substring(1, temp.length) + temp[0];
    }
    return res;
}
