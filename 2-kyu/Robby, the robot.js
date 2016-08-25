function getCommands(field, power) {
  var n = Math.sqrt(field.length);
  var starti = 0, startj = 0, endi = 0, endj = 0;
  for (let i = 0; i < n; i++)
  {
    for (let j = 0; j < n; j++)
    {
      if (field[i * n + j] == 'S')
      {
        starti = i;
        startj = j;
      }
      if (field[i * n + j] == 'T')
      {
        endi = i;
        endj = j;
      }
    }
  }
  var queue = [{i: starti, j: startj, d: 'n', p: power, path: [], visited: [[starti,startj].toString()]}];
  while (queue.length > 0)
  {
    let s = queue.shift();
    let i = s.i, j = s.j, d = s.d, p = s.p, path = s.path, visited = s.visited;
    if (i == endi && j == endj)
      return path.length <= power ? path : [];
    if (i < 0 || i >= n || j < 0 || j >= n || field[i*n+j] == '#' || p == 0)
      continue;
    if (d == 'n')
    {
      let temp = path.slice();
      let v = visited.slice();
      if (j+1 < n && v.indexOf([i,j+1].toString()) == -1)
      {
        temp.push('r');
        queue.push({i: i, j: j, d: 'e', p: p-1, path: temp, visited: v});
      }
      temp = path.slice();
      if (j-1 >= 0 && v.indexOf([i,j-1].toString()) == -1)
      {
        temp.push('l');
        queue.push({i: i, j: j, d: 'w', p: p-1, path: temp, visited: v});
      }
      temp = path.slice();
      if (v.indexOf([i-1,j].toString()) == -1)
      {
        temp.push('f');
        v.push([i-1,j].toString());
        queue.push({i: i-1, j: j, d: 'n', p: p-1, path: temp, visited: v});
      }
    }
    else if (d == 's')
    {
      let temp = path.slice();
      let v = visited.slice();
      if (j+1 < n && v.indexOf([i,j+1].toString()) == -1)
      {
        temp.push('r');
        queue.push({i: i, j: j, d: 'w', p: p-1, path: temp, visited: v});
      }
      temp = path.slice();
      if (j-1 >= 0 && v.indexOf([i,j-1].toString()) == -1)
      {
        temp.push('l');
        queue.push({i: i, j: j, d: 'e', p: p-1, path: temp, visited: v});
      }
      temp = path.slice();
      if (v.indexOf([i+1,j].toString()) == -1)
      {
        temp.push('f');
        v.push([i+1,j].toString());
        queue.push({i: i+1, j: j, d: 's', p: p-1, path: temp, visited: v});
      }
    }
    else if (d == 'e')
    {
      let temp = path.slice();
      let v = visited.slice();
      if (i+1 < n && v.indexOf([i+1,j].toString()) == -1)
      {
        temp.push('r');
        queue.push({i: i, j: j, d: 's', p: p-1, path: temp, visited: v});
      }
      temp = path.slice();
      if (i-1 >= 0 && v.indexOf([i-1,j].toString()) == -1)
      {
        temp.push('l');
        queue.push({i: i, j: j, d: 'n', p: p-1, path: temp, visited: v});
      }
      temp = path.slice();
      if (v.indexOf([i,j+1].toString()) == -1)
      {
        temp.push('f');
        v.push([i,j+1].toString());
        queue.push({i: i, j: j+1, d: 'e', p: p-1, path: temp, visited: v});
      }
    }
    else if (d == 'w')
    {
      let temp = path.slice();
      let v = visited.slice();
      if (i-1 >= 0 && v.indexOf([i-1,j].toString()) == -1)
      {
        temp.push('r');
        queue.push({i: i, j: j, d: 'n', p: p-1, path: temp, visited: v});
      }
      temp = path.slice();
      if (i+1 < n && v.indexOf([i+1,j].toString()) == -1)
      {
        temp.push('l');
        queue.push({i: i, j: j, d: 's', p: p-1, path: temp, visited: v});
      }
      temp = path.slice();
      if (v.indexOf([i,j-1].toString()) == -1)
      {
        temp.push('f');
        v.push([i,j-1].toString());
        queue.push({i: i, j: j-1, d: 'w', p: p-1, path: temp, visited: v});
      }
    }
  }
  return [];
}
