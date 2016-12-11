function getMean(arr, x, y) {
  return x > 1 && y > 1 && x <= arr.length && y <= arr.length ? [arr.slice(0,x).reduce(function(sum, a) {return sum + a;},0)/x
  + arr.slice(arr.length - y, arr.length).reduce(function(sum, a) {return sum + a;},0)/y]
  .reduce(function(sum, a) {return sum + a;}, 0)/2 : -1;
}
