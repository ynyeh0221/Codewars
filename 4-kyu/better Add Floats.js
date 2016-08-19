function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function addition(n1, n2, inic)
{
  let carry = inic;
  let res = '';
  for (let i = 0; i < n1.length; i++)
  {
    let temp = parseInt(n1[i]) + parseInt(n2[i]) + carry;
    if (temp < 10)
    {
      res += temp;
      carry = 0;
    }
    else
    {
      res += temp % 10;
      carry = 1;
    }
  }
  return [res.split('').reverse().join(''), carry];
}
function add(){
  //implement
  let res = arguments[0].toString();
  for (let i = 1; i < arguments.length; i++)
  {
    let temp = arguments[i].toString();
    let point = 0;
    for (let j = 0; j < res.length; j++)
    {
      if ((res[j] != '.' && !isNumber(res[j])) || point > 1)
        return NaN;
      if (res[j] == '.')
        point += 1;
    }
    point = 0;
    for (let j = 0; j < temp.length; j++)
    {
      if ((temp[j] != '.' && !isNumber(temp[j])) || point > 1)
        return NaN;
      if (temp[j] == '.')
        point += 1;
    }
    if (res[0] == '.')
      res = '0' + res;
    if (temp[0] == '.')
      temp = '0' + temp;
    res = res.split('.');
    temp = temp.split('.');
    let j;
    for (j = 0; j < res[0].length && res[0][j] == '0'; j++);
    if (j == res[0].length)
      res[0] = '0';
    for (j = 0; j < temp[0].length && temp[0][j] == '0'; j++);
    if (j == temp[0].length)
      temp[0] = '0';
    while (res[0].length < temp[0].length)
      res[0] = '0' + res[0];
    while (temp[0].length < res[0].length)
      temp[0] = '0' + temp[0];
    if (res.length == 2 && temp.length == 2)
    {
      while (res[1].length < temp[1].length)
        res[1] += '0';
      while (temp[1].length < res[1].length)
        temp[1] += '0';
      let decimalsum = addition(res[1].split('').reverse(), temp[1].split('').reverse(), 0);
      let integersum = addition(res[0].split('').reverse(), temp[0].split('').reverse(), decimalsum[1]);
      let j;
      for (j = decimalsum[0].length-1; j > 1 && decimalsum[0][j] == '0'; j--);
      decimalsum[0] = decimalsum[0].substring(0, j+1);
      res = integersum[1] == 0 ? integersum[0] + '.' + decimalsum[0] : '1' + integersum[0] + '.' + decimalsum[0];
    }
    else if (res.length == 1 && temp.length == 1)
    {
      let integersum = addition(res[0].split('').reverse(), temp[0].split('').reverse(), 0);
      res = integersum[1] == 0 ? integersum[0] : '1' + integersum[0];
    }
    else if (res.length == 2 && temp.length == 1)
    {
      let integersum = addition(res[0].split('').reverse(), temp[0].split('').reverse(), 0);
      res = integersum[1] == 0 ? integersum[0] + '.' + res[1] : '1' + integersum[0] + '.' + res[1];
    }
    else
    {
      let integersum = addition(res[0].split('').reverse(), temp[0].split('').reverse(), 0);
      res = integersum[1] == 0 ? integersum[0] + '.' + temp[1] : '1' + integersum[0] + '.' + temp[1];
    }
  }
  return res;
}
