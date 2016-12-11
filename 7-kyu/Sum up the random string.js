function sumFromString(str){
  return str.split('').reduce(function(res, a, i) {
    if (a.charCodeAt() >= '0'.charCodeAt() && a.charCodeAt() <= '9'.charCodeAt())
      res[1] = res[1] * 10 + parseInt(a, 10);
    else
    {
      res[0] += res[1];
      res[1] = 0;
    }
    if (i === str.length-1)
      res[0] += res[1];
    return res;
  }, [0,0])[0];
}
