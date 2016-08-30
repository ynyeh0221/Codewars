splitMessage = function(message, count)
{
  if (count <= 0)
    return null;
  let res = [];
  for (let i = 0; i < count; i++)
    res.push('');
  if (message == null)
    return res;
  for (let i = 0; i < message.length; i++)
  {
    for (let j = 0; j < count; j++)
      res[j] += j == i % count ? message[i] : '-';
  }
  return res;
}
