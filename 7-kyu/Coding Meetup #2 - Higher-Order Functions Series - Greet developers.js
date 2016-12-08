function greetDevelopers(list) {
  // thank you for checking out my kata :)
  return list.map(function(a){a['greeting'] = 'Hi ' + a.firstName + ', what do you like the most about ' + a.language + '?'; return a;});
}
