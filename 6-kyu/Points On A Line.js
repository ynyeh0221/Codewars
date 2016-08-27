function onLine(points) {
  if (points.length === 0)
    return true;
  let vx = points[0][0], count = 0;
  for (let i in points)
  {
    if (points[i][0] == vx)
      count ++;
  }
  if (count == points.length)
    return true;
  let vy = points[0][1];
  count = 0;
  for (let i in points)
  {
    if (points[i][1] == vy)
      count ++;
  }
  if (count == points.length)
    return true;
  let a = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0]), b = points[0][1] - a * points[0][0];
  for (let i = 2; i < points.length; i++)
  {
    if (points[i][0] * a + b != points[i][1])
      return false;
  }
  return true;
}
