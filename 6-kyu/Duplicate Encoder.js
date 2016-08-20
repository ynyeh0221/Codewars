function duplicateEncode(word){
    let dic = {}, res = '';
    word = word.toLowerCase();
    for (let i in word)
    {
      if (!(word[i] in dic))
        dic[word[i]] = 0;
      dic[word[i]] ++;
    }
    for (let i in word)
      res += dic[word[i]] == 1 ? '(' : ')';
    return res;
}
