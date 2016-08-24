function interpret(code) {
  code = code.split('\n');
  var output = "";
  let stack = [];
  let nums = new Set();
  for (let i = 0; i < 10; i++)
    nums.add(i.toString());
  let i = 0, j = 0, dir = 'R';
  while (code[i][j] != '@')
  {
    if (nums.has(code[i][j]))
      stack.push(parseInt(code[i][j]));
    else if (code[i][j] == '+')
    {
      let a = stack.pop(), b = stack.pop();
      stack.push(a+b);
    }
    else if (code[i][j] == '-')
    {
      let a = stack.pop(), b = stack.pop();
      stack.push(b-a);
    }
    else if (code[i][j] == '*')
    {
      let a = stack.pop(), b = stack.pop();
      stack.push(a*b);
    }
    else if (code[i][j] == '/')
    {
      let a = stack.pop(), b = stack.pop();
      if (a === 0)
        stack.push(0);
      else
        stack.push(b/a);
    }
    else if (code[i][j] == '%')
    {
      let a = stack.pop(), b = stack.pop();
      if (a === 0)
        stack.push(0);
      else
        stack.push(b%a);
    }
    else if (code[i][j] == '!')
    {
      if (stack.pop() === 0)
        stack.push(1);
      else
        stack.push(0);
    }
    else if (code[i][j] == '`')
    {
      let a = stack.pop(), b = stack.pop();
      if (b > a)
        stack.push(1);
      else
        stack.push(0);
    }
    else if (code[i][j] == '>')
      dir = 'R';
    else if (code[i][j] == '<')
      dir = 'L';
    else if (code[i][j] == '^')
      dir = 'U';
    else if (code[i][j] == 'v')
      dir = 'D';
    else if (code[i][j] == '?')
    {
      let dirs = ['R', 'L', 'U', 'D'];
      dir = dirs[Math.floor(Math.random() * dirs.length)];
    }
    else if (code[i][j] == '_')
    {
      if (stack.pop() === 0)
        dir = 'R';
      else
        dir = 'L';
    }
    else if (code[i][j] == '|')
    {
      if (stack.pop() === 0)
        dir = 'D';
      else
        dir = 'U';
    }
    else if (code[i][j] == '\"')
    {
      if (dir == 'R')
      {
        j ++;
        while (code[i][j] != '\"')
        {
          stack.push(code[i][j].charCodeAt());
          j ++;
        }
      }
      else if (dir == 'L')
      {
        j--;
        while (code[i][j] != '\"')
        {
          stack.push(code[i][j].charCodeAt());
          j --;
        }
      }
      else if (dir == 'U')
      {
        i--;
        while (code[i][j] != '\"')
        {
          stack.push(code[i][j].charCodeAt());
          i --;
        }
      }
      if (dir == 'D')
      {
        i++;
        while (code[i][j] != '\"')
        {
          stack.push(code[i][j].charCodeAt());
          j ++;
        }
      }
    }
    else if (code[i][j] == ':')
    {
      if (stack.length > 0)
        stack.push(stack[stack.length-1]);
      else
        stack.push(0);
    }
    else if (code[i][j] == '\\')
    {
      if (stack.length > 1)
      {
        let a = stack.pop(), b = stack.pop();
        stack.push(a);
        stack.push(b);
      }
      else
        stack.push(0);
    }
    else if (code[i][j] == '$')
      stack.pop();
    else if (code[i][j] == '.')
      output += stack.pop();
    else if (code[i][j] == ',')
      output += String.fromCharCode(stack.pop());
    else if (code[i][j] == '#')
    {
      if (dir == 'R')
        j ++;
      else if (dir == 'L')
        j --;
      else if (dir == 'U')
        i --;
      if (dir == 'D')
        i ++;
    }
    else if (code[i][j] == 'p')
    {
      let y = stack.pop(), x = stack.pop(), v = stack.pop();
      code[y] = code[y].substring(0, x) + String.fromCharCode(v) + code[y].substring(x+1, code[y].length);
    }
    else if (code[i][j] == 'g')
    {
      let y = stack.pop(), x = stack.pop();
      stack.push(code[y][x].charCodeAt());
    }
    if (dir == 'R')
      j ++;
    else if (dir == 'L')
      j --;
    else if (dir == 'U')
      i --;
    if (dir == 'D')
      i ++;
  }
  return output;
}
