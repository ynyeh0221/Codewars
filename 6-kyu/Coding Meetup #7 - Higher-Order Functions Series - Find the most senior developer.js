function findSenior(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.filter(a=>a.age === list.reduce(function(a,b){return a.age > b.age ? a : b}).age);
}
