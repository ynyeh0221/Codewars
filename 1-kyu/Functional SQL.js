var query = function() {
  this.data = [];
  this.call_select = false;
  this.call_from = false;
  this.call_orderBy = false;
  this.call_groupBy = false;
  this.call_execute = false;
  this.selectfun = null;
  this.orderfun = null;
  this.wherefun = [];
  this.wherefun2 = [];
  this.groupfun = [];
  this.havingfun = [];
  this.throw = null;
  if (!(this instanceof query))
    return new query();
};

query.prototype.select = function()
{
  if (this.call_select)
    this.throw = "SELECT";
  this.call_select = true;
  this.selectfun = arguments[0];
  return this;
}

query.prototype.from = function()
{
  if (this.call_from)
    this.throw = "FROM";
  this.call_from = true;
  if (arguments.length > 1)
  {
    for (let i in arguments[0])
    {
      for (let j in arguments[1])
      {
        let temp = [];
        temp.push(arguments[0][i]);      
        temp.push(arguments[1][j]);
        this.data.push(temp.slice());
      }
    }
  }
  else
    this.data = arguments[0];
  return this;
}

query.prototype.where = function()
{
  if (this.wherefun.length > 0)
    this.wherefun2 = arguments;
  else
    this.wherefun = arguments;
  return this;
}

query.prototype.groupBy = function()
{
  if (this.call_groupBy)
    this.throw = "GROUPBY";
  this.call_groupBy = true;
  this.groupfun = arguments;
  return this;
}

query.prototype.orderBy = function(name)
{
  if (this.call_orderBy)
    this.throw = "ORDERBY";
  this.call_orderBy = true;
  this.orderfun = name;
  return this;
}

query.prototype.having = function()
{
  this.havingfun = arguments;
  return this;
}

query.prototype.execute = function()
{
  if (this.call_execute)
    this.throw = "EXECUTE";
  this.call_execute = true;
  if (this.throw)
    throw new Error('Duplicate ' + this.throw);
  if (!this.call_from)
    return [];
  let res = this.data.slice();
  if (this.wherefun.length > 0)
  {
    let temp = [];
    for (let j = 0; j < res.length; j++)
    {
      let flag = false;
      for (let i in this.wherefun)
      {
        if (this.wherefun[i](res[j]))
          flag = true;
      }
      if (flag)
        temp.push(res[j])
    }
    res = temp.slice();
  }
  if (this.wherefun2.length > 0)
  {
    let temp = [];
    for (let j = 0; j < res.length; j++)
    {
      let flag = false;
      for (let i in this.wherefun2)
      {
        if (this.wherefun2[i](res[j]))
          flag = true;
      }
      if (flag)
        temp.push(res[j])
    }
    res = temp.slice();
  }
  if (this.groupfun.length > 0)
  {
    let dic = {};
    for (let j = 0; j < res.length; j++)
    {
      let temp = dic;
      for (let i = 0; i < this.groupfun.length; i++)
      {
        if (!(this.groupfun[i](res[j]) in temp))
        {
          temp[this.groupfun[i](res[j])] = i == this.groupfun.length-1 ? [] : {};
        }
        temp = temp[this.groupfun[i](res[j])];
      }
      temp.push(res[j]);
    }
    res = toarr(dic);
  }
  if (this.selectfun)
  {
    let newdata = [];
    for (let i = 0; i < res.length; i++)
      newdata.push(this.selectfun(res[i]));
    res = newdata.slice();
  }
  if (this.orderfun)
    res.sort(this.orderfun);
  if (this.havingfun.length > 0)
  {
    let finalres = [];
    for (let i = 0; i < res.length; i++)
    {
      let inres = true;
      for (let j = 0; j < this.havingfun.length; j++)
      {
        let temp = [];
        for (let k in res[i])
          temp.push(res[i][k]);
        if (!this.havingfun[j](temp))
          inres = false;
      }
      if (inres)
        finalres.push(res[i]);
    }
    res = finalres.slice();
  }
  return res;
}

function toarr(dic)
{
  let temp = [];
  for (let k in dic)
  {
    if (Array.isArray(dic[k]))
    {
      if (isNumeric(k))
        temp.push([parseInt(k), dic[k]])
      else
        temp.push([k, dic[k]])
    }
    else
    {
      if (isNumeric(k))
        temp.push([parseInt(k), toarr(dic[k])])
      else
        temp.push([k, toarr(dic[k])]);
    }
  }
  return temp;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
