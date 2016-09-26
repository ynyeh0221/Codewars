function cycle(dir, arr, cur) {
  let ind = arr.indexOf(cur);
  if (ind === -1)
      return null;
  return dir === 1 ? arr[(ind + 1) % arr.length] : arr[(ind - 1 + arr.length) % arr.length];
}
