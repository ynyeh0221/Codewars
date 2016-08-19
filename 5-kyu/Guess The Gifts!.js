function guessGifts(wishlist, presents) {
  // TODO
  var res = [];
  var dic = {}
  for (let i = 0; i < wishlist.length; i++)
  {
    for (let j = 0; j < presents.length; j++)
    {
      if (wishlist[i].size == presents[j].size && wishlist[i].clatters == presents[j].clatters && wishlist[i].weight == presents[j].weight)
      {
        if (!(wishlist[i].name in dic))
        {
          res.push(wishlist[i].name);
          dic[wishlist[i].name] = 1;
        }
      }
    }
  }
  return res;
}
