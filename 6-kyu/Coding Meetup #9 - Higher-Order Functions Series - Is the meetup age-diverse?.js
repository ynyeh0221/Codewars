function isAgeDiverse(list) {
  return [[10,20],[20,30],[30,40],[40,50],[50,60],[60,70],[70,80],[80,90],[90,100],[100,200]].every(function(x) {
    return list.some(function(y){return y.age >= x[0] && y.age < x[1];});
  });
}
