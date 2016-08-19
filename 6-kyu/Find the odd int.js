function findOdd(A) {
  //happy coding!
  var res = A[0];
  for (var i = 1; i < A.length; i++)
    res ^= A[i];
  return res;
}
