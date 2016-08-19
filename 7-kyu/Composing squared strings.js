function compose(s1, s2) {
    s1 = s1.split('\n');
    s2 = s2.split('\n');
    let res = "", n = s1.length;
    for (let i = 0; i < n; i ++)
    {
      if (i > 0)
        res += '\n';
      res += s1[i].substring(0, i+1) + s2[n-1-i].substring(0, n-i);
    }
    return res;
}
