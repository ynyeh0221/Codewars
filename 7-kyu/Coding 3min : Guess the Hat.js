function sc(e){
  k = 0 // just to pass the kata
  r = 2
  for (i in e)
    r = r == e[i][0] ? e[i][2] : r == e[i][2] ? e[i][0] : r
  return r
}
