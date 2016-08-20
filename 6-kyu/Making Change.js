const makeChange = (amount) => {
  let res = {};
  let sum = 0;
  function calc(coin_name, coin_val)
  {
    let num = 0;
    while (sum + coin_val <= amount)
    {
      num += 1;
      sum += coin_val;
    }
    if (num > 0)
      res[coin_name] = num;
  }
  calc('H', 50);
  calc('Q', 25);
  calc('D', 10);
  calc('N', 5);
  calc('P', 1);
  return res;
};
