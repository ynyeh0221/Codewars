function get_lists(n)
{
  var a = [1], j = [0];
  for (let i = 1; i < n; i++)
  {
    j.push(i - a[j[i-1]]);
    a.push(i - j[a[i-1]]);
  }
  return [a, j];
}

function john(n) {
    let j = get_lists(n)[1];
    return j;
}
function ann(n) {
    let a = get_lists(n)[0];
    return a;
}
function sumJohn(n) {
    let j = get_lists(n)[1];
    return j.reduce(function(a, b) {
      return a + b;
    }, 0);
}

function sumAnn(n) {
    let a = get_lists(n)[0];
    return a.reduce(function(a, b) {
      return a + b;
    }, 0);
}
