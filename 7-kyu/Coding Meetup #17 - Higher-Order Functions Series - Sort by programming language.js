function sortByLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.sort(function(a,b){if (a.language === b.language) return a.firstName > b.firstName ? 1 : a.firstName === b.firstName ? 0 : -1;
  return a.language > b.language ? 1 : a.language === b.language ? 0 : -1;});
}
