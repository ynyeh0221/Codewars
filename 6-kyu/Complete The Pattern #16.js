function pattern(n){
  if (n < 1)
    return "";
  var output=[];
  let temp = "";
  for (let i = 1; i <= n; i++)
    temp = (i % 10).toString() + temp;
  output.push(temp);
  for (let i = 1; i < n; i++)
  {
    let temp2 = "";
    let j = 0;
    for (j = 0; j < i; j ++)
      temp2 += temp[temp.length-1-i];
    temp = temp.substring(0, temp.length-i) + temp2;
    output.push(temp);
  }
  return output.reverse().join('\n');
}
