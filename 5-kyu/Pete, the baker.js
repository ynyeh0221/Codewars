function cakes(recipe, available) {
  var res = Number.MAX_VALUE;
  for (let key in recipe)
  {
    if (!(key in available))
      return 0;
    res = Math.min(res, Math.floor(available[key]/recipe[key]));
  }
  return res;
}
