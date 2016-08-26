function myParseInt(str) {
  return /^\d+$/g.test(str.replace(/(^\s*)?(\s*$)?/g,''))? +str : "NaN";
}
