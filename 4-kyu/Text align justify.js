/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function(str, len) {
  str = str.replace(/\n/g, ' ')
  str = str.split(' ');
  let res = [], words = 0, line = [];
  for (let i = 0; i < str.length; i++)
  {
    if (words + line.length - 1 + str[i].length < len)
    {
      line.push(str[i]);
      words += str[i].length;
    }
    else
    {
      let spaces = [];
      for (let j = 0; j < line.length-1; j++)
        spaces.push(' ');
      for (let j = 0; j < len - words - line.length + 1; j++)
        spaces[j% (line.length-1)] += ' ';
      let l = '';
      for (let j = 0; j < line.length; j++)
      {
        if (j > 0)
          l += spaces[j-1];
        l += line[j];
      }
      res.push(l);
      line = [];
      words = 0;
      i -= 1;
    }
  }
  if (line.length > 0)
    res.push(line.join(' '));
  return res.join('\n');
};
