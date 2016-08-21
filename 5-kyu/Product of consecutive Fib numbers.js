function productFib(prod){
  let p1 = 0, p2 = 1
  while (p1 * p2 < prod)
  {
    let temp = p2;
    p2 = p1 + p2;
    p1 = temp;
  }
  return p1 * p2 == prod ? [p1, p2, true] : [p1, p2, false]; 
}
