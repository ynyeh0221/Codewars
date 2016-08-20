function sc(a,b,c){
  [a,b,c] = [a,b,c].sort((a,b)=>a-b)
  return c == a + b ? a+'+'+b+'='+c : c == a * b ? a+'*'+b+'='+c : ''
}
