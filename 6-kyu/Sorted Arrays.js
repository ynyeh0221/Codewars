function nthSmallest(/* ...arrays, n */) {
  let k = arguments[arguments.length-1];
  let nums = [];
  for (let i = 0; i < arguments.length-1; i++)
    nums = nums.concat(arguments[i]);
  return findk(nums, k);
}

function findk(arr, k)
{
  let less = [], equal = [], larger = [];
  let pivot = arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] < pivot)
      less.push(arr[i]);
    else if (arr[i] > pivot)
      larger.push(arr[i]);
    else
      equal.push(arr[i]);
  }
  if (k <= less.length)
    return findk(less, k);
  else if (k > less.length && k <= less.length + equal.length)
    return pivot;
  else
    return findk(larger, k - less.length - equal.length);
}
