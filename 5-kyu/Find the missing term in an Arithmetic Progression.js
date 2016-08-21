var findMissing = function (list) { 
  let diff = list[1] - list[0];
  if (diff > 0)
  {
    for (let i = 2; i < list.length; i++)
    {
      if (list[i] - list[i-1] > diff)
        return list[i-1] + diff;
      else if (list[i] - list[i-1] < diff)
      {
        diff = list[i] - list[i-1];
        return list[i-2] + diff;
      }
    }
  }
  else
  {
    for (let i = 2; i < list.length; i++)
    {
      if (list[i] - list[i-1] < diff)
        return list[i-1] + diff;
      else if (list[i] - list[i-1] > diff)
      {
        diff = list[i] - list[i-1];
        return list[i-2] + diff;
      }
    }
  }
}
