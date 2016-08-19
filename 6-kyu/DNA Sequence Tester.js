function comp(s)
{
  let res = '';
  for (let i = 0; i < s.length; i++)
    res += s[i] == 'A' ? 'T' : (s[i] == 'T' ? 'A' : (s[i] == 'G' ? 'C' : 'G'));
  return res;
}

function checkDNA (seq1, seq2) {
  // your code here
  let c = '';
  let res = false;
  if (seq1.length <= seq2.length)
  {
    c = comp(seq1);
    if (seq2.indexOf(c) != -1 || seq2.split('').reverse().join('').indexOf(c) != -1)
      res = true;
  }
  else
  {
    c = comp(seq2);
    if (seq1.indexOf(c) != -1 || seq1.split('').reverse().join('').indexOf(c) != -1)
      res = true;
  }
  return res;
}
