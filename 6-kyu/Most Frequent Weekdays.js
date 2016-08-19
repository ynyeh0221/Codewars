function mostFrequentDays(year){
  //your code here
  let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 > 0))
      days[1] += 1;
  let freq = [];
  for (let i = 0; i < 7; i ++)
    freq.push(0);
  for (let m = 0; m < 12; m++)
  {
    for (let d = 1; d <= days[m]; d ++)
    {
      let day = new Date(year, m, d);
      freq[day.getDay()] += 1;
    }
  }
  let most_freq = Math.max.apply(null, freq);
  let res = [];
  for (let i = 1; i < 7; i ++)
  {
    if (freq[i] == most_freq)
      res.push(weekdays[i]);
  }
  if (freq[0] == most_freq)
      res.push(weekdays[0]);
  return res;
}
