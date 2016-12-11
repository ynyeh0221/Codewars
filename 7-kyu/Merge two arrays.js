function mergeArrays(a, b) {
  // your code here
  if (a.length < b.length)
    return a.reduce(function(res, e, i) {
      if (i === a.length-1)
      {
        res.push(a[i]);
        b.slice(i, b.length).forEach(function(d) {
          res.push(d);
        });
      }
      else
      {
        res.push(a[i]);
        res.push(b[i]);
      }
      return res;
    }, []);
  else
    return b.reduce(function(res, e, i) {
      if (i === b.length-1)
      {
        res.push(a[i]);
        res.push(b[i]);
        a.slice(i+1, a.length).forEach(function(d) {
          res.push(d);
        });
      }
      else
      {
        res.push(a[i]);
        res.push(b[i]);
      }
      return res;
    }, []);
}
