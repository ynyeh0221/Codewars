function countLanguages(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.reduce(function(obj, item){
    if (item.language in obj)
      obj[item.language] ++;
    else
      obj[item.language] = 1;
    return obj;
  }, {});
}
