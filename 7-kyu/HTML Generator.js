function HTMLGen () {
  // Your code here plox!
  this.p = function(s){return '<p>'+s+'</p>';}
  this.div = function(s){return '<div>'+s+'</div>';}
  this.b = function(s){return '<b>'+s+'</b>';}
  this.a = function(s){return '<a>'+s+'</a>';}
  this.body = function(s){return '<body>'+s+'</body>';}
  this.span = function(s){return '<span>'+s+'</span>';}
  this.title = function(s){return '<title>'+s+'</title>';}
  this.comment = function(s){return '<!--'+s+'-->';}
}
