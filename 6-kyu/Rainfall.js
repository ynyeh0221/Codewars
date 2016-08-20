function to_obj(string)
{
  let dic = {};
  string = string.split('\n');
  for (let i = 0; i < string.length; i++)
  {
    let numbers = [];
    let eachcity = string[i].split(':');
    let cityname = eachcity[0];
    eachcity[1] = eachcity[1].split(',');
    for (let j = 0; j < eachcity[1].length; j++)
    {
      eachcity[1][j] = eachcity[1][j].split(' ');
      numbers.push(parseFloat(eachcity[1][j][1]));
    }
    dic[cityname] = numbers.slice();
  }
  return dic;
}

function mean(town, strng) {
    let dic = to_obj(strng);
    if (!(town in dic))
      return -1;
    return dic[town].reduce(function(a, b) {
      return a + b;
    }, 0) / dic[town].length;
}
function variance(town, strng) {
    let dic = to_obj(strng);
    if (!(town in dic))
      return -1;
    let m = mean(town, strng);
    let sum = 0;
    for (let i in dic[town])
      sum += Math.pow(dic[town][i] - m, 2);
    return sum / dic[town].length;
}
