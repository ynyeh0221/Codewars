function comp(array1, array2){
  //your code here
  if (array1 === null || array2 === null)
    return false;
  if (array1.length != array2.length)
    return false;
  array1 = array1.sort((a, b) => a-b);
  array2 = array2.sort((a, b) => a-b);
  for (let i = 0; i < array1.length; i++)
  {
    if (array2[i] != array1[i] * array1[i])
      return false;
  }
  return true;
}
