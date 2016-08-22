function orderWeight(strng) {
    strng = strng.split(' ');
    strng.sort(
      function(a,b)
      {
        let asum = 0, bsum = 0;
        for (let i in a)
          asum += parseInt(a[i]);
        for (let i in b)
          bsum += parseInt(b[i]);
        if (asum == bsum)
          return a > b ? 1 : -1;
        return asum > bsum ? 1 : -1;
      }
    );
    return strng.join(' ');
}
