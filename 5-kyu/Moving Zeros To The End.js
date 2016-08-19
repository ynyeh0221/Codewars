var moveZeros = function (arr) {
  // TODO: Program me
  var ind = 0;
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] !== 0)
    {
      arr[ind] = arr[i];
      ind += 1;
    }
  }
  for (let i = ind; i < arr.length; i++)
    arr[i] = 0;
  return arr;
}
