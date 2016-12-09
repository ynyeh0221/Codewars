function balance (arr1, arr2){
  //CODE HERE!
  if (arr1.length != arr2.length)
    return false;
  let count1 = {}, count2 = {};
  for (let i = 0; i < arr1.length; i++)
  {
    if (!(arr1[i] in count1))
      count1[arr1[i]] = 0;
    count1[arr1[i]] ++;
    if (!(arr2[i] in count2))
      count2[arr2[i]] = 0;
    count2[arr2[i]] ++;
  }
  let cnt1 = Object.keys(count1).map(a=>count1[a]).sort((a,b)=>a-b);
  let cnt2 = Object.keys(count2).map(a=>count2[a]).sort((a,b)=>a-b);
  for (let i = 0; i < cnt1.length; i++)
  {
    if (cnt1[i] != cnt2[i])
      return false;
  }
  return true;
}
