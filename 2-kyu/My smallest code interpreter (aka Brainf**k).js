function brainLuck(code, input){
  let memory = [], stack = [], dic = {}, res = '';
  code = code.split('');
  for (let i = 0; i < code.length; i++)
  {
    if (code[i] == ']')
    {
      while (stack.length > 0 && stack[stack.length-1][1] != '[')
        stack.pop();
      let temp = stack.pop();
      dic[i] = temp[0];
      dic[temp[0]] = i;
    }
    else
      stack.push([i, code[i]]);
  }
  let ind = 0;
  input = input.split('');
  for (let i = 0; i < code.length; i++)
  {
    while (ind >= memory.length)
      memory.push(0);
    if (code[i] == ',')
      memory[ind] = input.shift().charCodeAt();
    else if (code[i] == '>')
      ind ++;
    else if (code[i] == '<')
      ind --;
    else if (code[i] == '+')
      memory[ind] = memory[ind] == 255 ? 0 : memory[ind] + 1;
    else if (code[i] == '-')
      memory[ind] = memory[ind] === 0 ? 255 : memory[ind] - 1;
    else if (code[i] == '.')
      res += String.fromCharCode(memory[ind]);
    else if (code[i] == '[')
    {
      if (memory[ind] === 0)
        i = dic[i];
    }
    else if (code[i] == ']')
    {
      if (memory[ind] !== 0)
        i = dic[i];
    }
  }
  return res;
}
