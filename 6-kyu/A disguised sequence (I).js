function fcn (n) {
    let un_1 = 2, un_2 = 1, un = 0;
    for (let i = 2; i <= n; i++)
    {
      un = 6 * un_2 * un_1 / (5 * un_2 - un_1);
      un_2 = un_1;
      un_1 = un;
    }
    return un;
}
