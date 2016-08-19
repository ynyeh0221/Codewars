var recoverSecret = function(triplets) {
  var charInfo = {};
  
  var registeredOrderedPair = function(ch1, ch2) {
    var ch1Info = charInfo[ch1] || {earlier: [], later: []};
    var ch2Info = charInfo[ch2] || {earlier: [], later: []};
    ch1Info.later.push(ch2);
    ch2Info.earlier.push(ch1);
    charInfo[ch1] = ch1Info;
    charInfo[ch2] = ch2Info;
  }
  
  var findEarliest = function() {
    // Earliest is the one that has no earlier characters
    for(var ch in charInfo) {
      if (charInfo[ch].earlier.length == 0) return ch;
    }
  }
  
  var removeChar = function(chToDelete) {
    delete charInfo[chToDelete];
    var isNotCh = function(ch) {return ch !== chToDelete;};
    for(var ch in charInfo) {
      charInfo[ch].earlier = charInfo[ch].earlier.filter(isNotCh);
      charInfo[ch].later = charInfo[ch].later.filter(isNotCh);
    }
  }
  
  triplets.forEach(function(triplet) {
     registeredOrderedPair(triplet[0], triplet[1]); 
     registeredOrderedPair(triplet[1], triplet[2]); 
  });
  
  var result = '';
  while(Object.keys(charInfo).length > 0) {
    var ch = findEarliest();
    result += ch;
    removeChar(ch);
  }
  
  return result;
}
