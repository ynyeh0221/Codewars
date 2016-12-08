function askForMissingDetails(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.filter(function(a){
    for (let k in a)
    {
      if (!a[k])
      {
        a.question = `Hi, could you please provide your ${k}.`;
        return a;
      }
    }
  });
