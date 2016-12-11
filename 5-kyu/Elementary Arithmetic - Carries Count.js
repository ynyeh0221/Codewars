function solve(input){
  let numbers = input.split('\n');
  return numbers.map(function(row) {
    let num = row.split(' ');
    let num1 = num[0].split('').reverse().map(a=>parseInt(a, 10));
    let num2 = num[1].split('').reverse().map(a=>parseInt(a, 10));
    return num1.reduce(function(count, e1, i) {
      let temp = num1[i] + num2[i] + count[1];
      count[0] = temp >= 10 ? count[0] + 1 : count[0];
      count[1] = temp >= 10 ? 1 : 0;
      return count;
    }, [0, 0]);
  }).
  map(function(a) {
    return a[0] === 0 ? 'No carry operation' : a[0] + ' carry operations';
  }).
  join('\n');  
}
