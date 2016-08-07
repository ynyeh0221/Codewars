// timeout

function iterPi(epsilon) {
	// your code
  let estimate = 1;
  let d = 3, sign = -1, iterations = 1;
  while (Math.abs(4 * estimate - Math.PI) >= epsilon)
  {
    estimate += sign * (1/d);
    d += 2;
    iterations += 1;
    sign *= -1;
  }
  return [iterations, parseFloat((4 * estimate).toFixed(10))];
}
