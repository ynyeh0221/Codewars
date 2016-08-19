function compose() {
  // Your solution
  let args = arguments;
  return function(res)
  {
    for (let i = args.length - 1; i >= 0; i--)
      res = args[i].call(this, res);
    return res;
  }
}
