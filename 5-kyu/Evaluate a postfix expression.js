function postfixEvaluator(string) {
  let stack = [];
  string = string.split(' ');
  for (let i = 0; i < string.length; i++)
  {
      if (string[i] == '+')
      {
          let temp2 = stack.pop();
          let temp1 = stack.pop();
          stack.push(temp1 + temp2);
      }
      else if (string[i] == '-')
      {
          let temp2 = stack.pop();
          let temp1 = stack.pop();
          stack.push(temp1 - temp2);
      }
      else if (string[i] == '*')
      {
          let temp2 = stack.pop();
          let temp1 = stack.pop();
          stack.push(temp1 * temp2);
      }
      else if (string[i] == '/')
      {
          let temp2 = stack.pop();
          let temp1 = stack.pop();
          stack.push(Math.floor(temp1 / temp2));
      }
      else
          stack.push(parseInt(string[i],10));
  }
  return stack[0];
}
