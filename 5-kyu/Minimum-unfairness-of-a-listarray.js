function minUnfairness(arr,k){
  arr = arr.sort((a,b)=>a-b);
  if (k === 0 || arr.length < k)
      return 0;
  let res = arr[k-1] - arr[0];
  for (let i = 0; i < arr.length-k+1; i++)
      res = Math.min(res, arr[i+k-1] - arr[i]);
  return res;
}
