function convert(input, source, target) {
  let decimal = 0;
  for (let j = 0; j < input.length; j++)
    decimal += source.indexOf(input[j]) * Math.pow(source.length, input.length - 1 - j);
  let res = '';
  if (decimal == 0)
    return target[0];
  while (decimal > 0)
  {
    res += target[decimal % target.length];
    decimal = Math.floor(decimal / target.length);
  }
  return res.split('').reverse().join('');
}
