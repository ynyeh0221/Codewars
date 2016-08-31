var largestDifference = function(data) {
  let res = 0;
  for (let i = 0; i < data.length; i++)
  {
    for (let j = data.length-1; j > i + res; j--)
    {
      if (data[j] >= data[i])
      {
        res = j - i;
        break;
      }
    }
  }
  return res;
};
