function findOddNames(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.filter(function(a) {
    let count = 0;
    for (let i = 0; i < a.firstName.length; i++)
      count += a.firstName[i].charCodeAt();
    return count % 2 != 0;
  });
}
