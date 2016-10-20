function sortPhotos(pics){
  let res = [];
  pics.sort(function(a,b)
  {
      a = a.split('.');
      b = b.split('.');
      if (parseInt(a[0],10) > parseInt(b[0],10))
          return 1;
      else if (parseInt(a[0],10) < parseInt(b[0],10))
          return -1;
      else
      {
          if (parseInt(a[1].substr(3, a[1].length))>parseInt(b[1].substr(3, b[1].length)))
              return 1;
          else
              return -1;
      }
  });
  if (pics.length >= 5)
      res = pics.slice(pics.length-5, pics.length);
  else
      res = pics.slice();
  let y = 0, n = 0;
  [y,n] = res[res.length-1].split('.');
  n = parseInt(n.substr(3, n.length), 10);
  res.push(y + '.img' + (n+1));
  return res;
};
