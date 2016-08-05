function arrange(strng) {
    // your code
    strng = strng.split(' ');
    for (let i = 0; i < strng.length; i++)
    {
      let start = i;
      let status = start % 2 === 0 ? 0 : 1;
      while (start < strng.length-1)
      {
        if (status === 0 && strng[start].length > strng[start+1].length)
        {
          let temp = strng[start];
          strng[start] = strng[start+1];
          strng[start+1] = temp;
          status = 1;
          start += 1;
        }
        else if (status === 1 && strng[start].length < strng[start+1].length)
        {
          let temp = strng[start];
          strng[start] = strng[start+1];
          strng[start+1] = temp;
          status = 0;
          start += 1;
        }
        else
          break;
      }
    }
    let res = '';
    for (let i = 0; i < strng.length; i++)
    {
      if (i > 0)
        res += ' ';
      res += i % 2 === 0 ? strng[i].toLowerCase() : strng[i].toUpperCase();
    }
    return res;
}
Best Practices0Clever0
0ForkCompare with your solutionLink
