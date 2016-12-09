function isLanguageDiverse(list) {
  // thank you for checking out the Coding Meetup kata :)
  list = [list.filter(a=>a.language==='Python').length,list.filter(a=>a.language==='Ruby').length,list.filter(a=>a.language==='JavaScript').length];
  return Math.max.apply(null,list)/Math.min.apply(null,list) <= 2;
}
