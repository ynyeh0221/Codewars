bind = function(list, func) {
  let res = [];
  for (let i = 0; i < list.length; i++)
  {
      let temp = func(list[i]);
      if (typeof temp !== "object")
          throw new Error('Whoops!');
      if (temp.length === 1)
          res.push(temp[0]);
      else
          res = res.concat(temp);
  }
  return res;
}
