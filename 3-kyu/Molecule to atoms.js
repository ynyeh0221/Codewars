function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function islower(s)
{
  if (s.charCodeAt() >= 97 && s.charCodeAt() <= 122)
    return true;
  return false;
}

function isupper(s)
{
  if (s.charCodeAt() >= 65 && s.charCodeAt() <= 90)
    return true;
  return false;
}

function parseMolecule(formula) {
  // do your science here
  console.log(formula)
  let res = {};
  let temp = "";
  for (let i = 0; i < formula.length; i++)
  {
    if (formula[i] == '[')
    {
      for (let k in res)
      {
        if (res[k] === 0) res[k] = 1;
      }
      let end = 0;
      let dic = {};
      for (let j = formula.length-1; j > i; j--)
      {
        if (formula[j] == ']')
        {
          end = j;
          break;
        }
      }
      dic = parseMolecule(formula.substring(i+1, end));
      let rep = "";
      if (isNumeric(end+1))
      {
        for (let k in dic)
          rep += k.toString() + (parseInt(formula[end+1]) * dic[k]).toString();
        rep = formula.substring(0, i) + rep + formula.substring(end+2, formula.length);
      }
      else
      {
        for (let k in dic)
          rep += k.toString() + dic[k].toString();
        rep = formula.substring(0, i) + rep + formula.substring(end+1, formula.length);
      }
      formula = rep.slice();
      i -= 1;
    }
    else if (formula[i] == '(')
    {
      for (let k in res)
      {
        if (res[k] === 0) res[k] = 1;
      }
      let end = 0;
      let dic = {};
      for (let j = formula.length-1; j > i; j--)
      {
        if (formula[j] == ')')
        {
          end = j;
          break;
        }
      }
      dic = parseMolecule(formula.substring(i+1, end));
      let rep = "";
      if (isNumeric(end+1))
      {
        for (let k in dic)
          rep += k.toString() + (parseInt(formula[end+1]) * dic[k]).toString();
        rep = formula.substring(0, i) + rep + formula.substring(end+2, formula.length);
      }
      else
      {
        for (let k in dic)
          rep += k.toString() + dic[k].toString();
        rep = formula.substring(0, i) + rep + formula.substring(end+1, formula.length);
      }
      formula = rep.slice();
      i -= 1;
    }
    else
    {
      if (isupper(formula[i]))
      {
        if (temp != "" && !(temp in res))
          res[temp] = 0;
        temp = formula[i];
        if (i == formula.length-1)
          res[temp] = 0;
      }
      else if (islower(formula[i]))
      {
        temp += formula[i];
      }
      else
      {
        let num = 0;
        num = parseInt(formula[i], 10);
        for (; i < formula.length && isNumeric(formula[i+1]); i++)
          num = 10 * num + parseInt(formula[i+1], 10);
        if (temp != "" && !(temp in res))
          res[temp] = 0;
        res[temp] += num;
        temp = "";
      }
    }
  }
  for (let k in res)
  {
    if (res[k] === 0) res[k] = 1;
  }
  return res;
}
