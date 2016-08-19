// timeout

function listPosition(word) {
  //Return the anagram list position of the word
  let w = word;
  word = word.split('');
  word = word.sort();
  let used = [];
  for (let i = 0; i < word.length; i++)
    used.push(false);
  let num = 0, flag = 0;
  function dfs(path, word, w)
  {
    if (path.length == word.length)
    {
      num += 1;
      if (path.join('') == w)
        flag = 1;
      return;
    }
    for (let i = 0; i < word.length; i++)
    {
      if (flag == 0)
      {
        if (i > 0 && !used[i-1] && word[i] == word[i-1])
          continue;
        if (!used[i])
        {
          used[i] = true;
          path.push(word[i]);
          dfs(path, word, w);
          path.pop();
          used[i] = false;
        }
      }
      else
        break;
    }
  }
  dfs([], word, w);
  return num;
}
