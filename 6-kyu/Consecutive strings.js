function longestConsec(strarr, k) {
    // your code
  let str = '';
  if (k <= 0)
    return str;
  for (let i = 0; i < strarr.length-k+1; i++)
  {
    let temp = strarr.slice(i, i+k).join('');
    if (str.length < temp.length)
      str = temp;
  }
  return str;
}
