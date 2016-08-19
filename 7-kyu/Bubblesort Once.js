function bubblesortOnce(intArr) {
  // Code the Bubblesort Algorithm here :D
  for (let i = 1; i < intArr.length; i ++)
  {
    if (intArr[i] < intArr[i-1])
    {
      let temp = intArr[i-1];
      intArr[i-1] = intArr[i];
      intArr[i] = temp;
    }
  }
  return intArr;
}
