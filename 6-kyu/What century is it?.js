var end = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
function whatCentury(year)
{
  let century = Math.floor((year-1) / 100) + 1;
  return Math.floor(century / 10) == 1 ? century + 'th' : century + end[century % 10];
}
