function intToBits(int, length = 32) {
  if (typeof length != 'number' || isNaN(length) || length <= 0 || length > 32)
    length = 32;
  if (int < 0)
    return (int >>> 0).toString(2);
  if (parseInt(int) != int)
    return null;
  let str = int.toString(2);
  while (str.length < length)
    str = '0' + str;
  return str;
}
