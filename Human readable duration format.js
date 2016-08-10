function formatDuration (seconds) {
  if (seconds === 0)
    return 'now';
  let times = ['years', 'days', 'hours', 'minutes', 'seconds'];
  let convert = [];
  convert.push(seconds % 60);
  seconds = Math.floor(seconds / 60);
  convert.push(seconds % 60);
  seconds = Math.floor(seconds / 60);
  convert.push(seconds % 24);
  seconds = Math.floor(seconds / 24);
  convert.push(seconds % 365);
  convert.push(Math.floor(seconds / 365));
  convert = convert.reverse();
  let res = '';
  for (let i = 0; i < 5; i++)
  {
    if (convert[i] > 0)
    {
      if (res.length > 0)
        res += ', ';
      if (convert[i] == 1)
        res += convert[i].toString() + ' ' + times[i].substring(0, times[i].length-1);
      else
        res += convert[i].toString() + ' ' + times[i];
    }
  }
  for (let i = res.length-1; i >= 0; i--)
  {
    if (res[i] == ',')
    {
      res = res.substring(0, i) + ' and' + res.substring(i+1, res.length);
      return res;
    }
  }
  return res;
}
