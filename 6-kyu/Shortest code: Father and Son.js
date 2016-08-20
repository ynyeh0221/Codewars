function sc(s){
  r = ''
  for (i in s)
    r += s.search(s[i].toUpperCase())>=0 && s.search(s[i].toLowerCase())>=0 ? s[i] : ''
  return r
}
