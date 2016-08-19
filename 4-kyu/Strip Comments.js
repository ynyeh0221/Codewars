function solution(input, markers){
  input = input.split('\n');
  for (let i = 0; i < input.length; i++)
  {
    for (let j = 0; j < input[i].length; j++)
    {
      if (markers.indexOf(input[i][j]) != -1)
      {
        input[i] = input[i].substring(0, j).trim();
        break;
      }
    }
  }
  return input.join('\n');
}
