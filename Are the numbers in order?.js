function inAscOrder(arr) {
  // Code your algorithm here :)
  
  // Hmmm ... maybe we should try our luck out ...
  // if (Math.random() > 0.5) {
  //  return true;
  // } else {
  //  return false;
  // }
  return arr.every((v, i) => i == 0 || arr[i] >= arr[i-1])
}
