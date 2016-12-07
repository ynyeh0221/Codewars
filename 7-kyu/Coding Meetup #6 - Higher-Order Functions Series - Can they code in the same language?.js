function isSameLanguage(list) {
  return list.every(e => e.language === list[0].language);
}
