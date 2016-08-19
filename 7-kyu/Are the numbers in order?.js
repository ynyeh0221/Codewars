function inAscOrder(arr) {
  return arr.every((v, i) => i == 0 || arr[i] >= arr[i-1])
}
