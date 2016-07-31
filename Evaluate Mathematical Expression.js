function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var calc = function (expression) {
  // evaluate `expression` and return result
  let result = 0, num = 0, temp = 0;
  let op = '+';
  var opused = true;
  var flag = 1;
  while (true)
  {
    var pstart = -1;
    for (let i = 0; i < expression.length; i++)
    {
       if (expression[i] == '(')
         pstart = i;
       else if (expression[i] == ')')
       {
         let calcp = calc(expression.substring(pstart+1, i));
         let first = expression.substring(0, pstart);
         let last = expression.substring(i+1, expression.length);
         console.log(expression[i])
         expression = first + calcp.toString() + last;
         break;
       }
    }
    if (pstart == -1)
      break;
  }
for (i = 0; i < expression.length; i++)
{
      if (isNumeric(expression[i]))
      {
            num = 0;
            let j = i;
            for (;i < expression.length && (isNumeric(expression[i]) || expression[i] == '.'); i++);
            num = parseFloat(expression.substring(j, i)) * flag;
            if (op == '+' || op == '-')
            {
                result += temp;
                temp = num * (op == '-' ? -1 : 1);
            }
            else if (op == '*')
                temp *= num;
            else if (op == '/')
                temp /= num;
            opused = true;
        }
        if (expression[i] != ' ')
        {
            if (opused)
            {
              op = expression[i];
              opused = false;
              flag = 1;
            }
            else              
              flag *= -1;
        }
  }
  result += temp;
  return result;
};
