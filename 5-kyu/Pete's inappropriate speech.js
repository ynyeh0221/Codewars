let endmarks = {".":1, "!":1, "?":1};
let midmarks = {',':1, ':':1, ';':1};
function peteTalk(speech,ok){
  //your code here
  ok = ok || [];
  for (let i = 0; i < ok.length; i++)
    ok[i] = ok[i].toLowerCase();
  speech = speech.split(' ');
  let start = true;
  for (let i = 0; i < speech.length; i++)
  {
    if (start)
    {
      speech[i] = speech[i][0].toUpperCase() + speech[i].substring(1, speech[i].length).toLowerCase();
      start = false;
    }
    else
      speech[i] = speech[i].toLowerCase();
    let j;
    for (j = speech[i].length-1; speech[i][j] in endmarks || speech[i][j] in midmarks; j --);
    let word = speech[i].substring(0, j + 1);
    let mark = speech[i].substring(j + 1, speech[i].length);
    if (word.length > 2 && ok.indexOf(word.toLowerCase()) == -1)
    {
      let temp = '';
      for (let j = 1; j < word.length-1; j++)
       temp += '*';
      word = word[0] + temp + word[word.length-1];
      speech[i] = word + mark;
    }
    if (mark != '' && mark in endmarks)
      start = true;
  }
  return speech.join(' ');
}
