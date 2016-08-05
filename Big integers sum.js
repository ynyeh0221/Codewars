function sum() {
  if (Object.keys(arguments).length === 0)
    return '0';
  let num1 = arguments[0].toString().split('').reverse().join('');
  for (let i = 1; i < arguments.length; i++)
  {
    let newnum = '';
    let carry = 0;
    let num2 = arguments[i].toString().split('').reverse().join('');
    for (let j = 0; j < Math.min(num1.length, num2.length); j++)
    {
      let temp = parseInt(num1[j]) + parseInt(num2[j]) + carry;
      if (temp < 10)
      {
        newnum += temp.toString();
        carry = 0;
      }
      else
      {
        newnum += (temp - 10).toString();
        carry = 1;
      }
    }
    if (num1.length > num2.length)
    {
      for (let j = num2.length; j < num1.length; j++)
      {
        let temp = parseInt(num1[j]) + carry;
        if (temp < 10)
        {
          newnum += temp.toString();
          carry = 0;
        }
        else
        {
          newnum += (temp - 10).toString();
          carry = 1;
        }
      }
    }
    else
    {
      for (let j = num1.length; j < num2.length; j++)
      {
        let temp = parseInt(num2[j]) + carry;
        if (temp < 10)
        {
          newnum += temp.toString();
          carry = 0;
        }
        else
        {
          newnum += (temp - 10).toString();
          carry = 1;
        }
      }
    }
    num1 = carry === 0 ? newnum : newnum + '1';
    let j = 0;
    for (j = num1.length-1; j >= 1 && num1[j] == '0'; j--);
    num1 = num1.substring(0, j+1);
  }
  return num1.split('').reverse().join('');
}
