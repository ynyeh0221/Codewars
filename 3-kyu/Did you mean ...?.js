function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
  // TODO: this is your task ;)
  let res = "";
  let edit = Number.MAX_VALUE;
  for (let i = 0; i < this.words.length; i++)
  {
    let newedit = minEditDist(term, this.words[i]);
    if (newedit < edit)
    {
      edit = newedit;
      res = this.words[i];
    }
  }
  return res;
}

function minEditDist(sm,sn)
{
  let m = sm.length,n = sn.length;
  let T = [];
  for (let i = 0; i < m+1; i++)
  {
    T.push([]);
    for (let j = 0; j < n+1; j++)
      T[i].push(0);
  }
  for (let i = 0; i < m+1; i++)
  {
    for (let j = 0; j < n+1; j++)
    {
      if (i == 0)
        T[i][j] = j;
      else if (j == 0)
        T[i][j] = i;
      else if (sm[i-1] == sn[j-1])
        T[i][j] = T[i-1][j-1];
      else
        T[i][j] = 1 + Math.min(T[i][j-1], T[i-1][j], T[i-1][j-1]);
    }
  }
  return T[m][n];
}
