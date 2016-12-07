const mapKeys = (fn, obj) => {
  var res = {};
  Object.keys(obj).forEach(k => {res[fn(k)] = obj[k];});
  return res;
};
