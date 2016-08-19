// complete the function to calculate the distance between two coordinates.
// Input: the two coordinates
// Output: return the distance in kilometers

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function deg(coord, c)
{
  let degree = [];
  let temp = 0;
  for (let i = 0; i < coord.length; i++)
  {
    if (isNumeric(coord[i]))
      temp = 10 * temp + parseInt(coord[i]);
    else
    {
      if (coord[i].search(/[^A-Za-z/s/,]/) != -1)
      {
        if (coord[i] != ' ')
          c.push(temp);
        temp = 0;
      }
      else
      {
        if (coord[i] != ' ' && coord[i] != ',')
          c.push(coord[i]);
      }
    }
  }
  let tempd = 0;
  console.log(c)
  for (let i = 0; i < c.length; i ++)
  {
    if (typeof c[i] != 'number')
    {
      if (c[i] == 'E' || c[i] == 'S')
        degree.push(tempd);
      else
        degree.push(-tempd);
      tempd = 0;
    }
    else
    {
      if (i <= 3)
        tempd = tempd + c[i] * Math.pow(1/60, i);
      else
        tempd = tempd + c[i] * Math.pow(1/60, i-4);
    }
  }
  return degree;
}

function distance(coord1, coord2) {
  var c1 = [], c2 = [], latlon1, latlon2;
  var tokm = 1.609344;
  latlon1 = deg(coord1, c1);
  latlon2 = deg(coord2, c2);
  console.log(latlon1)
  console.log(latlon2)
  let C = Math.sin(latlon1[0]/57.2958) * Math.sin(latlon2[0]/57.2958) + Math.cos(latlon1[0]/57.2958) * Math.cos(latlon2[0]/57.2958) * Math.cos((latlon1[1] - latlon2[1]) /57.2958);
  let distance = 3958.758349716768 * Math.acos(C);
  console.log(distance * tokm)
  return Math.floor(distance * tokm / 10) * 10;
}
