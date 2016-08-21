function powerOf4(n) {
  if (typeof n != 'number')
    return false;
  let log = Math.log10(n) / Math.log10(4);
  return Math.floor(log) == log ? n > 1 ? true : false : false;
}
