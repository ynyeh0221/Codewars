function calculate(num1,num2){
  let n1 = 0, n2 = 0;
  for (let i in num1)
    n1 += num1[i] == '1' ? Math.pow(2, num1.length-1-i) : 0;
  for (let i in num2)
    n2 += num2[i] == '1' ? Math.pow(2, num2.length-1-i) : 0;
  return n1 + n2;
}
