function makeValley(arr) {
    // Your code
    let res = [];
    arr = arr.sort((a, b) => a-b);
    if (arr.length % 2=== 0)
    {
      for (let i = arr.length - 1; i >= 0; i -= 2)
        res.push(arr[i]);
      for (let i = 0; i < arr.length; i += 2)
        res.push(arr[i]);
      return res;
    }
    else
    {
      let mid = arr[0];
      for (let i = arr.length - 1; i >= 1; i -= 2)
        res.push(arr[i]);
      res.push(mid);
      for (let i = 1; i < arr.length; i += 2)
        res.push(arr[i]);
      return res;
    }
}
