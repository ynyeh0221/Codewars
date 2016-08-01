//Return true if point is inside poly, and false if it is not

function pnpoly(nvert, vertx, verty, testx, testy)
{
  let i, j, c = false;
  for (i = 0, j = nvert-1; i < nvert; j = i++)
  {
    if ( ((verty[i]>=testy) != (verty[j]>=testy)) && (testx <= (vertx[j]-vertx[i]) * (testy-verty[i]) / (verty[j]-verty[i]) + vertx[i]) )
       c = !c;
  }
  return c;
}

function pointInPoly(poly, point) {
  let x = [], y = [];
  for (let i = 0; i < poly.length; i++)
  {
    x.push(poly[i][0]);
    y.push(poly[i][1]);
  }
  let res = pnpoly(poly.length, x, y, point[0], point[1]);
  return res;
}
