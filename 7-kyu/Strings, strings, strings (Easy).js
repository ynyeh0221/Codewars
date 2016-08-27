Array.prototype.toString = function ()
{
  return '[' + this.join(',') + ']';
}

Boolean.prototype.toString = function ()
{
  return this == true ? 'true' : 'false';
}

Number.prototype.toString = function ()
{
  return JSON.stringify(this);
}
