function isinteresting(number)
{
  let zeros = 0, same = 0, inc = true, dec = true, paildrome = true;
  for (let i = 0; i < number.length; i++)
  {
    if (i > 0 && number[i] == '0')
      zeros += 1;
    if (number[i] == number[0])
      same += 1;
    if (number[number.length-1] == '0')
    {
      if (number[number.length-2] != '1')
        dec = false;
      if (number[number.length-2] != '9')
        inc = false;
      if (i > 0 && i < number.length-1 && !(parseInt(number[i]) == parseInt(number[i-1])-1))
        dec = false;
      if (i > 0 && i < number.length-1 && !(parseInt(number[i]) == parseInt(number[i-1])+1))
        inc = false;
    }
    else
    {
      if (i > 0 && !(parseInt(number[i]) == parseInt(number[i-1])-1))
        dec = false;
      if (i > 0 && !(parseInt(number[i]) == parseInt(number[i-1])+1))
        inc = false;
    }
    if (number[i] != number[number.length-1-i])
      paildrome = false;
  }
  if (zeros == number.length-1 || same == number.length || inc || dec || paildrome)
    return true;
  return false;
}

function isInteresting(number, awesomePhrases) {
  if (number +2 < 100)
    return 0;
  if (number + 1 < 100 && isinteresting((number+2).toString()))
    return 1;
  else if (number + 1 < 100 && !isinteresting((number+2).toString()))
    return 0;
  if (number < 100 && (isinteresting((number+1).toString()) || isinteresting((number+2).toString())))
    return 1;
  else if (number + 1 < 100 && !(isinteresting((number+1).toString()) || isinteresting((number+2).toString())))
    return 0;
  if (awesomePhrases.indexOf(number) != -1)
    return 2;
  if (awesomePhrases.indexOf(number+1) != -1 || awesomePhrases.indexOf(number+2) != -1)
    return 1;
  if (isinteresting(number.toString()))
    return 2;
  else if (isinteresting((number+1).toString()) || isinteresting((number+2).toString()))
    return 1;
  return 0;
}
