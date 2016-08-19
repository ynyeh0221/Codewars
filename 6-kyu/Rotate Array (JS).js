function rotate(array,n){
  // ...
  while (n < 0)
    n += array.length;
  n %= array.length;
  return array.slice(array.length - n, array.length).concat(array.slice(0, array.length - n));
}
