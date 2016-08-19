function convertQueryToMap(query) {
  // add your code here
  let res = {};
  query = query.split('&');
  for (let i = 0; i < query.length; i++)
  {
    let item = query[i].split('=');
    let keys = item[0].split('.');
    let temp = res;
    for (let j = 0; j < keys.length; j++)
    {
      if (j == keys.length - 1)
        temp[keys[j]] = typeof item[1] == "string" ? decodeURIComponent(item[1]) : item[1];
      else
      {
        if (!(keys[j] in temp))
          temp[keys[j]] = {};
        temp = temp[keys[j]];
      }
    }
  }
  return res;
}
