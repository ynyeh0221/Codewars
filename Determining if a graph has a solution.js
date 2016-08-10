function solve_graph(start, end, arcs) {
  let stack = [start];
  let visited = new Set();
  while (stack.length > 0)
  {
    let cur = stack.pop();
    if (cur == end)
      return true;
    visited.add(cur);
    for (let i = 0; i < arcs.length; i++)
    {
      if (arcs[i].start == cur && !(visited.has(arcs[i].end)))
        stack.push(arcs[i].end);
    }
  }
  return false;
}
