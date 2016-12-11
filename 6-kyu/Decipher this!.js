function decipherThis(str) {
//have fun!
  return str.
    split(' ').
    map(function(w){
      let word = w.split(/(\d+)(.*)/).filter(e => e!== '');
      word[0] = String.fromCharCode(word[0]);
      if (word.length > 1 && word[1].length >= 2)
        word[1] = word[1][word[1].length-1] + word[1].substring(1, word[1].length-1) + word[1][0];
      return word.join('');
    }).
    join(' ');
}; 
