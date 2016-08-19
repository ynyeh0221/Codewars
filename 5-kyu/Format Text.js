function format(text, width) {
  //write code here
  text = text.split(' ');
  let res = [];
  let len = 0;
  let line = [];
  for (let i = 0; i < text.length; i++)
  {
    if (line.length > 0)
      len += 1;
    if (len + text[i].length <= width)
    {
      len += text[i].length;
      line.push(text[i]);
    }
    else
    {
      res.push(line.join(' '));
      len = text[i].length;
      line = [text[i]];
    }
    if (i == text.length - 1)
      res.push(line.join(' '));
  }
  return res.join('\n');
}
