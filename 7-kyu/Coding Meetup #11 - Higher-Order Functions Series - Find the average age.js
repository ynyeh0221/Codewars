function getAverageAge(list) {
  // thank you for checking out the Coding Meetup kata :)
  return Math.round(1/list.length * list.map((a)=>a.age).reduce(function(a,b){return a+b;}));
}
