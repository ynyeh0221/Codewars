function removeSmallest(n, arr) {
  if (n <= 0)
    return arr;
  else if (n > arr.length)
    return [];
  let res = [];
  let nums = arr.slice().sort((a,b)=>a-b).slice(n, arr.length);
  for (let i = arr.length-1; i >= 0; i--)
  {
    let ind = nums.indexOf(arr[i]);
    if (ind != -1)
    {
      res.push(arr[i]);
      nums.splice(ind,1);
    }      
  }
  return res.reverse();
}
