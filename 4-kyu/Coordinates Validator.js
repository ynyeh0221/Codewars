function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function isValidCoordinates(coordinates){
  if (coordinates.match(/[a-z]/i))
    return false;
  coordinates = coordinates.split(',');
  if (coordinates.length == 2)
  {
    if (isNumeric(coordinates[0]) && isNumeric(coordinates[1]))
    {
      let t1 = Number(coordinates[0]), t2 = Number(coordinates[1]);
      if (Math.abs(t1) <= 90 && Math.abs(t2) <= 180)
        return true;
    }
  }
  return false;
}
