function pattern(n){
  let res = [];
  for (let i = 1; i <= n; i++)
  {
    let temp = '';
    for (let j = 0; j < n - i; j++)
      temp += ' ';
    let temp2 = '';
    for (let j = 1; j <= i; j++)
      temp2 += (j % 10).toString();
    temp += temp2;
    temp += temp2.substring(0, temp2.length-1).split('').reverse().join('');
    for (let j = 0; j < n - i; j++)
      temp += ' ';
    res.push(temp);
  }
  return res.join('\n');
}
