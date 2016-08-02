function factorial(num)
{
    let res=1;
    for (let i = 2; i <= num; i++)
        res = res * i;
    return res;
}

function repeat_product(s)
{
  let counter = {};
  for (let i = 0; i < s.length; i++)
  {
    if (!(s[i] in counter))
      counter[s[i]] = 0;
    counter[s[i]] += 1;
  }
  let rp = 1;
  for (let k in counter)
    rp *= factorial(counter[k]);
  return rp;
}

function listPosition(word) {
  //Return the anagram list position of the word
  let res = 1;
  let wlist = word.slice().split('').sort();
  for (let i = 0; i < word.length; i++)
  {
    let n = wlist.length;
    let f = factorial(n)/repeat_product(wlist);
    let ind = wlist.indexOf(word[i])
    if (ind === 0)
    {
        wlist = wlist.slice(1, wlist.length);
        continue;
    }
    res += f / n * ind;
    wlist = wlist.slice(0, ind).concat(wlist.slice(ind + 1, wlist.length));
  }
  return res;
}
