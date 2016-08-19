let comp = {"NORTH": "SOUTH", "WEST": "EAST", "SOUTH": "NORTH", "EAST": "WEST"};
function dirReduc(arr){
  let stack = [];
  for (let i = 0; i < arr.length; i++)
  {
    if (stack.length > 0 && comp[arr[i]] == stack[stack.length-1])
      stack.pop();
    else
      stack.push(arr[i]);
  }
  return stack;
}
