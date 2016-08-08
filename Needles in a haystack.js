function search(haystack, needle) {
  //TODO
  let res = [];
  function find(haystack, needle, pre)
  {
    for (let k in haystack)
    {
      if (typeof haystack[k] == 'string')
      {
        if (haystack[k].indexOf(needle) != -1)
        {
          if (pre.length > 0)
            res.push(pre.join('.')+'.'+k);
          else
            res.push(k);
        }
      }
      else if (typeof haystack[k] == 'object')
      {
        let temp = pre.slice();
        temp.push(k);
        find(haystack[k], needle, temp);
      }
    }
  }
  find(haystack, needle, []);
  return res.sort();
}
