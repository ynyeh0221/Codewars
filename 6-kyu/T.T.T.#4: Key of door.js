function findKey(nums){
  nums = nums.map(i => i.toString());
  let res = '';
  for (let j = 0; j < nums[0].length; j++)
  {
    let n1 = [], n2 = [];
    for (let i = 0; i < nums.length; i++)
    {
      if (i === 0)
        n1.push(nums[i][j]);
      else
      {
        if (nums[i][j] == n1[n1.length-1])
          n1.push(nums[i][j]);
        else
          n2.push(nums[i][j]);
      }
      if ((n1.length >= 2 && n2.length >= 1) || (n1.length >= 1 && n2.length >= 2))
      {
        res += n1.length > n2.length ? n2[0] : n1[0];
        break;
      }
    }
  }
  return res;
}
