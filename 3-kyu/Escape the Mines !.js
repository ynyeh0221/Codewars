function solve(map, miner, exit) {
  let queue = [{i: miner.x, j: miner.y, path: []}], m = map.map(function(arr) {
    return arr.slice();
  });
  while (queue.length > 0)
  {
    let cur = queue.shift();
    if (cur.i == exit.x && cur.j == exit.y)
      return cur.path;
    if (cur.i < 0 || cur.i >= map.length || cur.j < 0 || cur.j >= map[0].length || m[cur.i][cur.j] !== true)
      continue;
    m[cur.i][cur.j] = '*';
    let p = cur.path.slice();
    p.push('left');
    queue.push({i: cur.i-1, j: cur.j, path: p});
    p = cur.path.slice();
    p.push('right');
    queue.push({i: cur.i+1, j: cur.j, path: p});
    p = cur.path.slice();
    p.push('up');
    queue.push({i: cur.i, j: cur.j-1, path: p});
    p = cur.path.slice();
    p.push('down');
    queue.push({i: cur.i, j: cur.j+1, path: p});
  }
}
