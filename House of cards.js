function houseOfCards(floors){
  //good luck!
  if (typeof floors != 'number' || floors < 1 || parseInt(floors) != floors)
    throw new Error("Error");
  let v = 2
  let h = 1
  let times = 0;
  for (let i = 1; i <= floors; i++)
    times += i;
  return h * times + v * (times + floors + 1)
}
