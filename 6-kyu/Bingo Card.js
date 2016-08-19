function getCard()
{
  let num = [];
  while (num.length < 5)
  {
    let rn = 'B' + Math.floor((Math.random() * 15) + 1).toString();
    if (num.indexOf(rn) == -1)
      num.push(rn);    
  }
  while (num.length < 10)
  {
    let rn = 'I' + Math.floor((Math.random() * 15) + 16).toString();
    if (num.indexOf(rn) == -1)
      num.push(rn);  
  }
  while (num.length < 14)
  {
    let rn = 'N' + Math.floor((Math.random() * 15) + 31).toString();
    if (num.indexOf(rn) == -1)
      num.push(rn);    
  }
  while (num.length < 19)
  {
    let rn = 'G' + Math.floor((Math.random() * 15) + 46).toString();
    if (num.indexOf(rn) == -1)
      num.push(rn);   
  }
  while (num.length < 24)
  {
    let rn = 'O' + Math.floor((Math.random() * 15) + 61).toString();
    if (num.indexOf(rn) == -1)
      num.push(rn);   
  }
  return num;
}
