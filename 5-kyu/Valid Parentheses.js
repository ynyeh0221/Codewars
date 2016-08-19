function validParentheses(parens){
  //TODO
  var stack = [];
  for (var i = 0; i < parens.length; i++)
  {
    if (parens[i] == '(')
      stack.push('(');
    else
    {
      var temp = stack.pop();
      if (temp != '(')
        return false;
    }
  }
  return stack.length == 0 ? true : false;
}
