var sum_pairs=function(ints, s){
    let dic = {}, res = [ints.length, ints.length];
    for (let i = 0; i < ints.length; i++)
    {
      if (!(ints[i] in dic))
        dic[ints[i]] = [];
      dic[ints[i]].push(i);
    }
    for (let i = 0; i < ints.length; i++)
    {
      if (s - ints[i] == ints[i])
      {
        if (ints[i] in dic && dic[ints[i]].length >= 2)
        {
          if (dic[ints[i]][1] < res[1])
            res = [i, dic[ints[i]][1]];
          delete dic[ints[i]];
        }
      }
      else if ((s - ints[i]) in dic)
      {
        if (dic[s - ints[i]][0] < res[1])
          res = [i, dic[s - ints[i]][0]];
        delete dic[s - ints[i]];
        delete dic[ints[i]];
      }
    }
    return res[1] == ints.length ? undefined : [ints[res[0]], ints[res[1]]];
}
