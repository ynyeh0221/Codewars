function pickPeaks(arr){  
  //  return {pos:[],peaks:[]}
  let pos = [], peaks = [];
  for (let i = 1; i < arr.length-1; i++)
  {
    if (arr[i] > arr[i-1])
    {
      for (let j = i + 1; j < arr.length; j++)
      {
        if (arr[j] > arr[i])
          break;
        else if (arr[j] < arr[i])
        {
          pos.push(i);
          peaks.push(arr[i]);
          break;
        }
      }
    }
  }
  return {pos: pos, peaks: peaks};
}
