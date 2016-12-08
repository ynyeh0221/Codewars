function filterHomogenous(arrays) {
  // Alea iacta est, code legionary!
  return arrays.filter(function(a)
  {
    return a.length ? a.every(b=>typeof b === typeof a[0]) : false;
  });
}
