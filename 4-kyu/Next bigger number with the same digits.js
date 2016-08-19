function nextBigger(n){
  //your code here
  var ss = n.toString();
  var nums = [];
  for (let i = 0; i < ss.length; i++)
    nums.push(parseInt(ss[i]));
  for(var i = nums.length - 1; i > 0 && nums[i] <= nums[i - 1]; i--);
  if(i === 0){
      reverse(0, nums.length - 1);
      return -1;
  }
  for(var j = i + 1; j < nums.length && nums[i - 1] < nums[j]; j++);
  swap(i - 1, j - 1);
  reverse(i, nums.length - 1);
  return parseInt(nums.join(''));    
    
  function reverse(start, end)
  {
     while(start < end)
     {
        swap(start, end);
        start++;
        end--;
     }
  }
  function swap(i, j)
  {
     var tmp = nums[i];
     nums[i] = nums[j];
     nums[j] = tmp;
  }  
}
