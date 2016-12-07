function multiply(n, l) {
  return l.map(a => Math.round(a / (1 / n)));
}
