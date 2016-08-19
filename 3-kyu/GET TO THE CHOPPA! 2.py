def inbound(x, y, n, m):
    return x >= 0 and x <= n - 1 and y >= 0 and y <= m - 1

def find_shortest_path(grid, start_node, end_node):
    if len(grid) == 0 or not end_node.passable:
        return []
    queue = [start_node]
    visited = {}
    adj = ((+1, 0), (-1, 0), (0, +1), (0, -1))
    while queue:
        node = queue.pop(0)
        if node == end_node:
            path = []
            node = end_node
            while node != start_node:
                path.append(node)
                node = visited[node]
            path += [start_node]
            return path[: : -1]
            
        for adj_pair in adj:
            x = node.position.x + adj_pair[0]
            y = node.position.y + adj_pair[1]
            if not inbound(x, y, len(grid), len(grid[0])) or not grid[x][y].passable:
                continue
            if grid[x][y] in visited:
                continue
            visited[grid[x][y]] = node
            queue += [grid[x][y]]
