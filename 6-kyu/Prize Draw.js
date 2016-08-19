function rank(st, we, n) {
    // your code
    if (st.length === 0)
      return "No participants";
    let orist = st.split(',');
    st = st.split(',');
    if (n > st.length)
      return "Not enough participants";
    let winning_nums = [];
    for (let i = 0; i < st.length; i++)
    {
      let temp = st[i].length;
      st[i] = st[i].toUpperCase();
      for (let j = 0; j < st[i].length; j++)
        temp += st[i][j].charCodeAt() - 65 + 1;
      winning_nums.push([orist[i], temp * we[i]]);
    }
    winning_nums.sort(
      function(a, b) {
        if (a[1] == b[1])
          return a[0] > b[0] ? 1 : -1;
        return a[1] > b[1] ? -1 : 1;
    });
    return winning_nums[n-1][0];
}
