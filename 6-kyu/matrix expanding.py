def expand(maze, fill):
    m = []
    n = len(maze)
    for i in xrange(2*n):
        temp = []
        if i < n / 2 or i >= 3 * n /2:
            for j in xrange(2 * n):
                temp += [fill]
        else:
            for j in xrange(2 * n):
                if j < n / 2 or j >= 3 * n / 2:
                    temp += [fill]
                elif j < 3 * n /2:
                    temp += [maze[i-n/2][j-n/2]]
        m += [temp]
    return m
