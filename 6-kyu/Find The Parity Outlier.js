function findOutlier(integers){
  let odd = [], even = [];
  for (let i = 0; i < integers.length; i++)
  {
    if (integers[i] % 2 === 0)
      even.push(integers[i]);
    else
      odd.push(integers[i]);
    if (even.length > 0 && odd.length > even.length)
      return even[0];
    else if (odd.length > 0 && odd.length < even.length)
      return odd[0];
  }
}
