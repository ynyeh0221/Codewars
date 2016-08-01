def spiralize(size):
    # Make a snake
    if size == 0:
        return []
    if size == 1:
        return [[1]]
    if size == 2:
        return [[1,1],[0,1]]
    matrix = [[0 for j in xrange(size)] for i in xrange(size)]
    for i in xrange(size):
        matrix[i][0] = 1
        matrix[i][size-1] = 1
    for j in xrange(size):
        matrix[0][j] = 1
        matrix[size-1][j] = 1
    matrix[1][0] = 0
    dfs(2,1,matrix,'r')
    print matrix
    return matrix
    
def dfs(i, j, matrix, dir):
    if dir == 'r':
        temp = j
        while matrix[i][j+1] == 0 and matrix[i-1][j] == 0 and matrix[i+1][j] == 0:
            matrix[i][j] = 1
            j += 1
        if j == temp:
            return
        j -= 1
        dfs(i+1, j, matrix, 'd')
    elif dir == 'd':
        temp = i
        while matrix[i+1][j] == 0 and matrix[i][j+1] == 0 and matrix[i][j-1] == 0:
            matrix[i][j] = 1
            i += 1
        if i == temp:
            return
        i -= 1
        dfs(i, j-1, matrix, 'l')
    elif dir == 'l':
        temp = j
        while matrix[i][j-1] == 0 and matrix[i-1][j] == 0 and matrix[i+1][j] == 0:
            matrix[i][j] = 1
            j -= 1
        if j == temp:
            return
        j += 1
        dfs(i-1, j, matrix, 'u')
    elif dir == 'u':
        temp = i
        while matrix[i-1][j] == 0 and matrix[i][j-1] == 0 and matrix[i][j+1] == 0:
            matrix[i][j] = 1
            i -= 1
        if temp == i:
            return
        i += 1
        dfs(i, j+1, matrix, 'r')
