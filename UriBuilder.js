function UriBuilder(str)
{
  this.str = str;
  this.params = {};
}

UriBuilder.prototype.build = function()
{
  if (Object.keys(this.params).length > 0)
  {
    let res = this.str.split('?')[0];
    res += '?';
    for (let k in this.params)
      res += k + '=' + encodeURIComponent(this.params[k].toString()) + '&';
    return res.substring(0, res.length-1);
  }
  return this.str;
}
