function createMessage(s1) {
    return function(s2){
      if (!s2) return s1;
      return createMessage(s1 + " "+ s2);
    }
}
