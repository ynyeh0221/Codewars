function thirstyIn(water, ageOfDwellerArray) {
  
  // Happy Coding, Dweller!
  if (water < 0)
    return -1;
  let dailywater = 0;
  for (let i = 0; i < ageOfDwellerArray.length; i++)
  {
    if (ageOfDwellerArray[i] < 18)
      dailywater += 1;
    else if (ageOfDwellerArray[i] <= 50)
      dailywater += 2;
    else
      dailywater += 1.5;
  }
  return dailywater === 0 ? -1 : Math.floor(water / dailywater);
}
