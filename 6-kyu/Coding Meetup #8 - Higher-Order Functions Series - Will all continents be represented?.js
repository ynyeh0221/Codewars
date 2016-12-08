function allContinents(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.some(a=>a.continent === 'Africa') &&
         list.some(a=>a.continent === 'Americas') &&
         list.some(a=>a.continent === 'Asia') &&
         list.some(a=>a.continent === 'Europe') &&
         list.some(a=>a.continent === 'Oceania');
}
