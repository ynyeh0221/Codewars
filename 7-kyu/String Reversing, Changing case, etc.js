function reverseAndMirror(s1,s2) {
  return s2.split('').reduce(function(s,e) {
    if (e === e.toUpperCase())
      s.push(e.toLowerCase());
    else
      s.push(e.toUpperCase());
    return s;
  }, []).reverse().join('') + 
  '@@@' + 
  s1.split('').reduce(function(s,e) {
    if (e === e.toUpperCase())
      s.push(e.toLowerCase());
    else
      s.push(e.toUpperCase());
    return s;
  }, []).reverse().join('') +
  s1.split('').reduce(function(s,e) {
    if (e === e.toUpperCase())
      s.push(e.toLowerCase());
    else
      s.push(e.toUpperCase());
    return s;
  }, []).join('');
}
