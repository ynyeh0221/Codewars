function findEmirp(n){
  let p = [];
  let sum = 0;
  for (let i = 10; i <= n; i++)
  {
      let prime = true;
      for (let j = 2; j * j <= i; j++)
      {
          if (i % j === 0)
          {
              prime = false;
              break;
          }
      }
      if (prime)
      {
          let rprime = true;
          let reversen = i.toString();   
          reversen = reversen.split('').reverse().join('');
          reversen = parseInt(reversen, 10);
          if (reversen <= i || reversen % 2 === 0)
              continue;
          for (let j = 2; j * j <= reversen; j++)
          {
              if (reversen % j === 0)
              {
                  rprime = false;
                  break;
              }
          }
          if (rprime)
          {
              p.push(i);
              sum += i;
              if (reversen <= n)
              {
                  p.push(reversen);
                  sum += reversen;
              }
          }
      }
  }
  p = p.sort((a,b)=>a-b);
  return [p.length, p[p.length-1], sum];
}
