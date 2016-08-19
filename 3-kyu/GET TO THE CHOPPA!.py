# timeout

from Queue import Queue

def inbound(x, y, n, m):
    return x >= 0 and x <= n - 1 and y >= 0 and y <= m - 1

def find_shortest_path(grid, start_node, end_node):
    if len(grid) == 0 or not end_node.passable:
        return []
    queue = Queue()
    queue.put({'node': start_node, 'path': [], 'visited': set()})
    adj = ((+1, 0), (-1, 0), (0, +1), (0, -1))
    while queue:
        s = queue.get()
        node = s['node']
        path = s['path'][:]
        path += [node]
        if node == end_node:
            return path
        visited = set(s['visited'])
        for adj_pair in adj:
            x = node.position.x + adj_pair[0]
            y = node.position.y + adj_pair[1]
            if not inbound(x, y, len(grid), len(grid[0])) or not grid[x][y].passable:
                continue
            if grid[x][y] in visited:
                continue
            visited.add(grid[x][y])
            queue.put({'node': grid[x][y], 'path': path, 'visited': visited})  
