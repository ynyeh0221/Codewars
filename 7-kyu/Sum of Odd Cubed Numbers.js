function cubeOdd(arr) {
if (arr.some(e => typeof e !== 'number')) return undefined;
  return arr.filter(e => e%2 != 0).map(e => e*e*e).reduce((a, b) => a + b, 0);
}
