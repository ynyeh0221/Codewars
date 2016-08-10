function sumIntervals(intervals){
  intervals = intervals.sort(
    function(a,b) {
      return a[0] > b[0] ? 1 : -1;
  });
  let stack = [];
  for (let i = 0; i < intervals.length; i++)
  {
    if (stack.length == 0 || (stack.length > 0 && intervals[i][0] > stack[stack.length-1][1]))
      stack.push(intervals[i].slice());
    else if (stack.length > 0 && intervals[i][1] > stack[stack.length-1][1])
    {
      let temp = stack.pop();
      temp[1] = intervals[i][1];
      stack.push(temp.slice());
    }
  }
  let res = 0;
  for (let i = 0; i < stack.length; i++)
    res += stack[i][1] - stack[i][0];
  return res;
}
