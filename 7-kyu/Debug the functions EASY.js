function multi(arr) {
  return arr.reduce((sum, a)=>sum*a, 1);
}
function add(arr) {
  return arr.reduce((sum, a)=>sum+a, 0);
}
function reverse(str) {
  return str.split('').reverse().join('');
}
