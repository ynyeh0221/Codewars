function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function simplify(poly){
  //your code here
  let dic = {};
  let sign = 1;
  let num = 1;
  if (poly[0] == '-')
    sign = -1;
  for (let i = 0; i < poly.length; i++)
  {
    let start = i;
    for (; i < poly.length && isNumeric(poly[i]); i ++);
    if (start < i)
      num = parseInt(poly.substring(start, i));
    start = i;
    for (; i < poly.length && !isNumeric(poly[i]) && poly[i] != '+' && poly[i] != '-'; i ++);
    let temp = poly.substring(start, i).split('').sort().join('');
    if (!(temp in dic))
      dic[temp] = 0;
    dic[temp] += sign * num;
    num = 1;
    sign = 1;
    if (poly[i] == '-')
      sign = -1;
  }
  let key = [];
  for (let k in dic)
  {
    if (k != '' && dic[k] !== 0)
      key.push([k, k.length]);
  }
  key = key.sort(
  function(a,b) {
      if (a[1] == b[1])
        return a[0] < b[0] ? -1 : 1;
      return a[1] < b[1] ? -1 : 1;
    }
  );
  let res = "";
  for (let i = 0; i < key.length; i++)
  {
    if (i > 0 && dic[key[i][0]] > 0)
      res += '+';
    if (dic[key[i][0]] > 1 || dic[key[i][0]] < -1)
      res += dic[key[i][0]].toString() + key[i][0];
    else if (dic[key[i][0]] == 1)
      res += key[i][0];
    else if (dic[key[i][0]] == -1)
      res += '-' + key[i][0];
  }
  return res;
}
