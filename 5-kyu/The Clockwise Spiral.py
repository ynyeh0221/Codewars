def createSpiral(N):
    if type(N) is not int or N < 1:
        return []
    matrix = [[N*N] * N for i in xrange(N)]
    global ind
    ind = 1
    dfs(0, 0, matrix, 1, N-1, 0, N-1, 'R')
    return matrix
    
def dfs(i, j, matrix, imin, imax, jmin, jmax, dir):
    global ind
    if ind >= len(matrix) * len(matrix):
        return
    if dir == 'R':
        while j < jmax:
            matrix[i][j] = ind
            ind += 1
            j += 1
        dfs(i, j, matrix, imin, imax, jmin, jmax-1, 'D')
    elif dir == 'D':
        while i < imax:
            matrix[i][j] = ind
            ind += 1
            i += 1
        dfs(i, j, matrix, imin, imax-1, jmin, jmax, 'L')
    elif dir == 'L':
        while j > jmin:
            matrix[i][j] = ind
            ind += 1
            j -= 1
        dfs(i, j, matrix, imin, imax, jmin+1, jmax, 'U')
    elif dir == 'U':
        while i > imin:
            matrix[i][j] = ind
            ind += 1
            i -= 1
        dfs(i, j, matrix, imin+1, imax, jmin, jmax, 'R')
