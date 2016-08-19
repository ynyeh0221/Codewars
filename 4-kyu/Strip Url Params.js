function stripUrlParams(url, paramsToStrip){
  paramsToStrip = paramsToStrip || [];
  let urll = url.split('?');
  if (urll.length == 1)
    return url;
  let para = urll[1].split('&');
  let afterquery = [];
  let dic = {};
  for (let i = 0; i < para.length; i++)
  {
    let temp = para[i].split('=');
    if (temp[0] in dic)
      continue;
    if (paramsToStrip.length > 0 && paramsToStrip.indexOf(temp[0]) != -1)
      continue;
    dic[temp[0]] = 1;
    afterquery.push(temp.join('='));
  }
  console.log(urll[0] + '?' + afterquery.join('&'))
  return urll[0] + '?' + afterquery.join('&');
}
