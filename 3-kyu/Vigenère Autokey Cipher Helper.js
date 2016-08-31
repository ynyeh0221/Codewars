function VigenèreAutokeyCipher(key, abc) {
  this.encode = function (str) {
    let res = '', i = 0;    
    str.split("").forEach(function(letter) {
      if (abc.indexOf(letter) === -1)
        res += letter;
      else
      {
        let shift = i < key.length ? key[i] : str[i - key.length];
        while (abc.indexOf(shift) === -1)
        {
          i ++;
          shift = i < key.length ? key[i] : str[i - key.length];
        }
        res += abc[(abc.indexOf(letter) + abc.indexOf(shift)) % abc.length];
        i ++;
      }
    });
    return res;
  };
  
  this.decode = function (str) {
    let res = '', i = 0;    
    str.split("").forEach(function(letter, index) {
      if (abc.indexOf(letter) === -1)
        res += letter;
      else
      {
        var shift = i < key.length ? key[i] : res[i - key.length];
        while (abc.indexOf(shift) === -1)
        {
          i ++;
          shift = i < key.length ? key[i] : res[i - key.length];
        }
        res += abc[(abc.indexOf(letter) + abc.length - abc.indexOf(shift)) % abc.length];
        i ++;
      }
    });
    return res;
  };
}
