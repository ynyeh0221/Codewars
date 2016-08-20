function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null)
    return 0;
  for (let i = 0; i < arrayOfArrays.length; i++)
  {
    if (arrayOfArrays[i] === null || arrayOfArrays[i].length === 0)
      return 0;
  }
  arrayOfArrays = arrayOfArrays.sort(function(a, b) {return a.length > b.length ? 1 : -1});
  for (let i = 1; i < arrayOfArrays.length; i++)
  {
    if (arrayOfArrays[i].length != arrayOfArrays[i-1].length + 1)
      return arrayOfArrays[i-1].length + 1;
  }
  return 0;
}
