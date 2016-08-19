function calc(expr) {
  // TODO: Your awesome code here
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  if (expr.length === 0) return 0;
  expr = expr.split(' ');
  console.log(expr);
  let stack = [];
  for (let i = 0; i < expr.length; i++)
  {
    if (isNumeric(expr[i]))
    {
      stack.push(expr[i]);
    }
    else
    {
      let t2 = parseFloat(stack.pop());
      let t1 = parseFloat(stack.pop());
      if (expr[i] == '+')
        stack.push(t1 + t2);
      else if (expr[i] == '-')
        stack.push(t1 - t2);
      else if (expr[i] == '*')
        stack.push(t1 * t2);
      else
        stack.push(t1 / t2);
    }
  }
  return parseFloat(stack.pop());
}
