function factorial (n){
  let j = 1;
  for (let i = 1; i <= n; i++)
    j = j * i;
  return j;
}

function perms(element){
  //your code here
  if (typeof element != 'string')
    element = element.toString();
  let dic = {};
  for (let i = 0; i < element.length; i++)
  {
    if (!(element[i] in dic))
      dic[element[i]] = 0;
    dic[element[i]] += 1;
  }
  let res = factorial(element.length);
  for (let k in dic)
    res /= factorial(dic[k]);
  return res;
}
