function round(x)
{
  if (x > 255)
    x = 255;
  else if (x < 0)
    x = 0;
  return x;
}
function convert(x)
{
  let s = '';
  var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  for (let i = 0; i < 2; i++)
  {
    s += hex[x % 16];
    x = Math.floor(x / 16);
  }
  return s;
}
function rgb(r, g, b){
  // complete this function
  r = round(r);
  g = round(g);
  b = round(b);
  let res = '';
  res += convert(b) + convert(g) + convert(r);
  return res.split('').reverse().join('');
}
