function getMissingIngredients(recipe, added) {
  let max = 0, res = {};
  for (let item in recipe)
  {
    if (item in added)
      max = Math.max(Math.ceil(added[item] / recipe[item]), max);
  }
  if (max == 0)
    return recipe;
  for (let item in recipe)
  {
    if (!(item in added))
      res[item] = max * recipe[item];
    else if (added[item] < max * recipe[item])
      res[item] = max * recipe[item] - added[item];
  }
  return res;
}
