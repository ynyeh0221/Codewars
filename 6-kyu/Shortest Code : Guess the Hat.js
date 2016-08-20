function sc(e){
  r = 2
  for (i in e)
    r = r == e[i][0] ? e[i][2] : r == e[i][2] ? e[i][0] : r
  return r
}
