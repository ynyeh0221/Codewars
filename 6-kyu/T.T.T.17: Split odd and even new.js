function splitOddAndEven(n) {
  return (n+"").match(/[13579]+|[2468]+/g).map(x=>+x)
}
