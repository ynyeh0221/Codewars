// just a small amount of possible functions to start testing with.
var addOne = function(e) {
  return e+1;
};
var square = function(e) {return e * e;};

// Extend the Function prototype with a method pipe

Function.prototype.pipe = function(f) {
  return function(ff) {
    return f(this(ff));
  }.bind(this);
}
