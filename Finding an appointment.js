function islarger(s1, s2)
{
  s1 = s1.split(':');
  s2 = s2.split(':');
  if (s1[0] > s2[0])
    return true;
  else if (s1[0] == s2[0])
    return s1[1] >= s2[1] ? true : false;
  else
    return false;
}

function compare(s1, s2)
{
  s1 = s1[0].split(':');
  s2 = s2[0].split(':');
  if (s1[0] > s2[0])
    return 1;
  else if (s1[0] == s2[0])
  {
    if (s1[1] == s2[1])
      return 0;
    return s1[1] > s2[1] ? 1 : -1;
  }
  else
    return -1;
}

function minus(s1, s2)
{
  let t1 = s1.split(':');
  let t2 = s2.split(':');
  let res = "";
  if (t2[1] >= t1[1])
  {
    let temp1, temp2;
    if (parseInt(t2[0],10) - parseInt(t1[0], 10) >= 10)
      temp1 = (parseInt(t2[0],10) - parseInt(t1[0], 10)).toString();
    else
      temp1 = '0' + (parseInt(t2[0],10) - parseInt(t1[0], 10)).toString();
    if (parseInt(t2[1],10) - parseInt(t1[1], 10) >= 10)
      temp2 = (parseInt(t2[1],10) - parseInt(t1[1], 10)).toString();
    else
      temp2 = '0' + (parseInt(t2[1],10) - parseInt(t1[1], 10)).toString();
    res = temp1 + ':' + temp2;
  }
  else
  {
    let temp1, temp2;
    if (parseInt(t2[0],10) - 1 - parseInt(t1[0], 10) >= 10)
      temp1 = (parseInt(t2[0],10) - 1 - parseInt(t1[0], 10)).toString();
    else
      temp1 = '0' + (parseInt(t2[0],10) - 1 - parseInt(t1[0], 10)).toString();
    if (parseInt(t2[1],10) + 60 - parseInt(t1[1], 10) >= 10)
      temp2 = (parseInt(t2[1],10) + 60 - parseInt(t1[1], 10)).toString();
    else
      temp2 = '0' + (parseInt(t2[1],10) + 60 - parseInt(t1[1], 10)).toString();
    res = temp1 + ':' + temp2;
  }
  return res;
}

function getStartTime(schedules, duration) {
  // TODO
  let arr = [];
  for (let i = 0; i < schedules.length; i++)
    arr = arr.concat(schedules[i]);
  arr = arr.sort(compare);
  var s = [];

    s.push(arr[0]);
    for (let i = 1 ; i < arr.length; i++)
    {
        let top = s[s.length-1];
        if (!islarger(top[1], arr[i][0]))
            s.push(arr[i]);
        else if (!islarger(top[1], arr[i][1]))
        {
            top[1] = arr[i][1];
            s.pop();
            s.push(top);
        }
    }
    let d, temp1, temp2;
    if (Math.floor(duration / 60) >= 10)
      temp1 = (Math.floor(duration / 60)).toString();
    else
      temp1 = '0' + (Math.floor(duration / 60)).toString();
    if (duration % 60 >= 10)
      temp2 = (duration % 60).toString();
    else
      temp2 = '0' + (duration % 60).toString();
    d = temp1 + ':' + temp2;
    if (islarger(minus("09:00", s[0][0]), d))
      return "09:00";
    console.log(minus("09:00", s[0][0]))
    console.log(d)
    for (let i = 1; i < s.length; i++)
    {
      if (islarger(minus(s[i-1][1], s[i][0]), d))
        return s[i-1][1];
    }
    if (islarger(minus(s[s.length-1][1], "19:00"), d))
      return s[s.length-1][1];
    return null;
}
