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

    var regex = /\s*(=>|[-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
    return program.split(regex).filter(function (s) { return !s.match(/^\s*$/); });
};

Interpreter.prototype.input = function(expr)
{
    var tokens = this.tokenize(expr);
    if (tokens.length == 0)
      return '';
    let op = '+', preops = []; // preops is for parentheses
    let unassigned_vars = [], nest_vars = null, is_nest = false; // nest vars should be assigned first.
    let stack = [];
    let digit = 0;
    /////////////////////////// Check if the input is vaild /////////////////////////////
    if (tokens.length > 1)
    {
      for (let i = 0; i < tokens.length; i++)
      {
        if (isNumeric(tokens[i]))
          digit += 1;
      }
      if (digit == tokens.length)
        throw "Error";
    }
    //////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////User Defined Functions////////////////////////////////
    if (tokens[0] == 'fn')
    {
      let seperator = tokens.indexOf('=>');
      if (seperator == -1 || tokens[1] in this.vars) //no arrow or has duplicate name with a variable
        throw "Error";
      let args = tokens.slice(2, seperator);
      let body = tokens.slice(seperator+1).join(' ');
      let duplicate = {}; // Check if there is no duplicate arguments of the function
      for (let i = 0; i < args.length; i++)
      {
        if (args[i] in duplicate)
          throw "Error";
        duplicate[args[i]] = 1;
      }
      for (let i = 0; i < body.length; i++) // Check if there is any undefined variable in the function
      {
        if (/^[a-zA-Z]+$/.test(body[i]) && !(body[i] in duplicate))
          throw "Error";
      }
      this.functions[tokens[1]] = {args: args, body: body}; // If vaild, save it to this.functions object
      return '';
    }
    ///////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////// Call User Defined Functions //////////////////////////////
    if (tokens[0] in this.functions)
    {
      while (tokens.length >= 1) //Impelement Chained Functions
      {
        let function_name_index = 0, current_function = [];
        for (let i = 0; i < tokens.length; i++)
        {
          if (tokens[i] in this.functions)
            function_name_index = i;
        }
        for (let i = 0; i < this.functions[tokens[function_name_index]].args.length+1; i++)
          current_function.push(tokens[function_name_index + i]);
        let tail = tokens.slice(function_name_index + this.functions[tokens[function_name_index]].args.length+1);
        tokens = tokens.slice(0, function_name_index);
        let interpreter = new Interpreter();
        let args = this.functions[current_function[0]].args;
        if (args.length != current_function.length - 1)
          throw "Error";
        for (let i = 0; i < args.length; i++)
          interpreter.input(args[i] + ' = ' + current_function[i+1]);
        let function_value = interpreter.input(this.functions[current_function[0]].body);
        tokens.push(function_value);
        tokens = tokens.concat(tail);
        if (tokens.length == 1)
          return tokens[0];
      }
    }
    /////////////////////// Mathmatical Expression Calaulation ///////////////////////////////
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
          if (is_nest)
            nest_vars = tokens[i];
          else
            unassigned_vars.push(tokens[i]);
        }
        else
        {
          if (tokens[i+1] != '=')
            stack.push(this.vars[tokens[i]]);
          else
            if (is_nest)
              nest_vars = tokens[i];
            else
              unassigned_vars.push(tokens[i]);
        }
      }
      else if (tokens[i] == '=')
      {
        if (i == tokens.length || tokens[i+1] == '=')
          throw "Error";
        continue;
      }
      else if (tokens[i] == '(')
      {
        is_nest = true;
        preops.push(op);
        op = '+';
        stack.push(tokens[i]);
      }
      ////////////////////////// Deal With the Parenthesis ///////////////////////////
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
        ////////////////////////////// Nest Assignment ///////////////////////////////
        if (nest_vars)
        {
          this.vars[nest_vars] = tempsum;
          nest_vars = null;
        }
        //////////////////////////////////////////////////////////////////////////////
        isnest = false;
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
      ////////////////////////////////////////////////////////////////////////////////
      else
        op = tokens[i];
    }
    let res = stack.reduce(function(a, b) {
      return a + b;
    }, 0);
    //////////////////////////////////////////////////////////////////////////////////
    ////////////////////// Assign Value to Unsigned Variables ////////////////////////
    for (let i = 0; i < unassigned_vars.length; i++) // Chain Assignment
      this.vars[unassigned_vars[i]] = res;
    //////////////////////////////////////////////////////////////////////////////////
    return res;
};
