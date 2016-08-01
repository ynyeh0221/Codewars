// complete the function so that it returns the fastest route 
// timeout

function navigate(numberOfIntersections, roads, start, finish) {
  var adj = {};
  for (let k = 0; k < roads.length; k++)
  {
    if (!(roads[k].from in adj))
    {
      adj[roads[k].from] = [];
    }
    adj[roads[k].from].push([roads[k].to, roads[k].drivingTime]);
  }
  var queue = [{node: start, path: [start], sum: 0}];
  var mindis = Number.MAX_VALUE;
  var res = [];
  while (queue.length > 0)
  {
    let s = queue.shift(), path = s.path.slice(), sum = s.sum;
    let node = s.node;
    if (node == finish)
    {
      if (sum < mindis)
      {
        mindis = sum;
        res = path.slice();
      }
    }
    for (let k = 0; node in adj && k < adj[node].length; k ++)
    {
      let path = s.path.slice();
      if (path.indexOf(adj[node][k][0]) == -1)
      {
        path.push(adj[node][k][0]);
        queue.push({node:adj[node][k][0], path: path, sum: sum + adj[node][k][1]});
      }
    }
  }
  return res.length === 0 ? null : res;
}
