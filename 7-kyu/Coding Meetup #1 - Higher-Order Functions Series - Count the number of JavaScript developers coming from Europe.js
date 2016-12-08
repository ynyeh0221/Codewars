function countDevelopers(list) {
  // your awesome code here :)
  return list.filter((a)=>a.continent === 'Europe' && a.language === 'JavaScript').reduce(function(a){return a+1}, 0);
}
