function getRealFloor(n) {
  if (n <= 0) return n;  
  return (n > 0 && n < 13) ? n - 1: n - 2;
}
