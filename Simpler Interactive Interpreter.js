function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function Interpreter()
{
    this.vars = {};
    this.functions = {};
}

Interpreter.prototype.tokenize = function (program)
{
    if (program === "")
        return [];

    var regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
    return program.split(regex).filter(function (s) { return !s.match(/^\s*$/); });
};

Interpreter.prototype.input = function (expr)
{
    var tokens = this.tokenize(expr);
    if (tokens.length == 0)
      return '';
    let op = '+', preops = []; // preops for parentheses
    let curvar = null;
    let stack = [];
    for (let i = 0; i < tokens.length; i++)
    {
      if (isNumeric(tokens[i]))
      {
        let temp = parseInt(tokens[i]);
        if (op == '+')
          stack.push(temp);
        else if (op == '-')
          stack.push(-temp);
        else if (op == '*')
        {
          let temp1 = stack.pop();
          stack.push(temp1 * temp);
        }
        else if (op == '/')
        {
          let temp1 = stack.pop();
          stack.push(temp1 / temp);
        }
        else if (op == '%')
        {
          let temp1 = stack.pop();
          stack.push(temp1 % temp);
        }
      }
      else if (/^[a-zA-Z]+$/.test(tokens[i]))
      {
        if (!(tokens[i] in this.vars))
        {
          if (tokens[i+1] != '=')
            throw "Error";
          this.vars[tokens[i]] = 0;
          curvar = tokens[i];
        }
        else
        {
          if (tokens[i+1] != '=')
            stack.push(this.vars[tokens[i]]);
          else
            curvar = tokens[i];
        }
      }
      else if (tokens[i] == '=')
        continue;
      else if (tokens[i] == '(')
      {
        preops.push(op);
        op = '+';
        stack.push(tokens[i]);
      }
      else if (tokens[i] == ')')
      {
        let temp = [];
        while (true)
        {
          let t = stack.pop();
          if (t == '(')
            break;
          temp.push(t);
        }
        let tempsum = temp.reduce(function(a, b) {
          return a + b;
        }, 0);
        let preop = '+';
        if (preops.length > 0)
          preop = preops.pop();
        if (preop == '+')
          stack.push(tempsum);
        else if (preop == '-')
          stack.push(-tempsum);
        else if (preop == '*')
        {
          let t1 = stack.pop();
          stack.push(t1 * tempsum);
        }
        else if (preop == '/')
        {
          let t1 = stack.pop();
          stack.push(t1 / tempsum);
        }
        else if (preop == '%')
        {
          let t1 = stack.pop();
          stack.push(t1 % tempsum);
        }
      }
      else
        op = tokens[i];
    }
    let res = stack.reduce(function(a, b) {
      return a + b;
    }, 0);
    if (curvar != null)
      this.vars[curvar] = res;
    return res;
};
