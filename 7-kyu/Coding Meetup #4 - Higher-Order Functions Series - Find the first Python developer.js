function getFirstPython(list) {
  // Thank you for checking out my kata :)
  list = list.filter((a)=>a.language === 'Python');
  return list.length === 0 ? 'There will be no Python developers' : list[0].firstName + ', ' + list[0].country;
}
