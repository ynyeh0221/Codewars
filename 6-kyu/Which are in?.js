function inArray(array1,array2){
  //...
  let dic = {};
  let res = [];
  for (let i = 0; i < array1.length; i++)
  {
    for (let j = 0; j < array2.length; j++)
    {
      if (array2[j].indexOf(array1[i]) != -1)
        dic[array1[i]] = 1;
    }
  }
  for (let k in dic)
    res.push(k);
  return res.sort();
}
