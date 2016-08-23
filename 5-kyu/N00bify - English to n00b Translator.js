function n00bify(text)
{
  let res = '';
  let translate = {'too': '2', 'to': '2', 'for': '4', 'fore': '4', 'oo': '00', "be": 'b', "are": 'r', "you": 'u', "please": 'plz', "people": 'ppl', "really": 'rly', "have": 'haz', "know": 'no', 's': 'z', '.': '', ',': '', "'": ''}
  for (let i = 0; i < text.length; i++)
  {
    let added = false;
    if (text[i] != ' ')
    {
      for (let j = 6; j >= 1; j--)
      {
        let temp = text.substr(i, j).toLowerCase();
        if (temp in translate)
        {
          res += translate[temp];
          i += j-1;
          added = true;
          break;
        }
      }
      if (!added)
        res += text[i];
    }
    else
      res += text[i];
  }
  let length = 0;
  for (let i = 0; i < res.length; i++)
  {
    if (res[i] != '!' && res[i] != '?')
      length ++;
  }
  if (res[0] == 'w' || res[0] == 'W')
  {
    if (length >= 28)
      res = 'LOL OMG ' + res;
    else
      res = 'LOL ' + res;
  }
  else
  {
    if (length >= 32)
      res = 'OMG '+ res;
  }
  res = res.split(' ');
  let num_words = res.length;
  for (let i = 0; i < res.length; i++)
  {
    if ((i+1) % 2 === 0)
      res[i] = res[i].toUpperCase();
  }
  res = res.join(' ');
  if (res[0] == 'h' || res[0] == 'H')
    res = res.toUpperCase();
  res = res.split('?');
  let questions = '';
  for (let i = 0; i < num_words; i++)
    questions += '?';
  res = res.join(questions);
  res = res.split('!');
  let exclamations = '';
  for (let i = 0; i < num_words; i++)
    exclamations += i % 2 === 0 ? '!' : '1';
  res = res.join(exclamations);
  return res;
}
