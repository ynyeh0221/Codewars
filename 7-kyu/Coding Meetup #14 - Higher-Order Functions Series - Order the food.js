function orderFood(list) {
  var orders = {};
  list.forEach(d=>{
    if(orders[d.meal]) orders[d.meal]++;
    else orders[d.meal] = 1;
  });
  return orders;
}
