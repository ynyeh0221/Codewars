function scale(strng, k, n) {
    // your code
    if (strng == '')
      return '';
    strng = strng.split('\n');
    let res = "";
    for (let i = 0; i < strng.length; i++)
    {
      let temp = "";
      for (let j = 0; j < strng.length; j++)
      {
        for (let l = 0; l < k; l++)
          temp += strng[i][j];
      }
      for (let l = 0; l < n; l++)
      {
        if (i+l > 0)
          res += '\n';
        res += temp;
      }
    }
    return res;
}
