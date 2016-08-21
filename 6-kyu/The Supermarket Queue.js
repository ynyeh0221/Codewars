function queueTime(customers, n) {
    if (customers.length === 0)
      return 0;
    let tills = [];
    for (let i = 0; i < n; i++)
      tills.push(0);
    while (customers.length > 0)
    {
        let ind = tills.indexOf(Math.min.apply(null, tills));
        tills[ind] += customers.shift();
    }
    return Math.max.apply(null, tills);
}
