def dfs(board, index):
    global flag, row, col, block
    if flag == 1:
        return
    if index > 80:
        flag = 1
        return
    i = index / 9
    j = index % 9
    if board[i][j] != 0:
        return dfs(board, index + 1)
    for k in xrange(9):
        if row[i][k] or col[j][k] or block[i/ 3 * 3 + j / 3][k]:
            continue
        board[i][j] = k + 1
        row[i][k] = True
        col[j][k] = True
        block[i/ 3 * 3 + j / 3][k] = True
        dfs(board, index + 1)
        if flag == 1:
            return
        block[i/ 3 * 3 + j / 3][k] = False
        col[j][k] = False
        row[i][k] = False
        board[i][j] = 0

def solve(board):
    global flag, row, col, block
    flag = 0
    row = [[False for j in xrange(9)] for i in xrange(9)]
    col = [[False for j in xrange(9)] for i in xrange(9)]
    block = [[False for j in xrange(9)] for i in xrange(9)]
    for i in xrange(9):
        for j in xrange(9):
            if board[i][j] == 0:
                continue
            row[i][board[i][j] - 1] = True
            col[j][board[i][j] - 1] = True
            block[i/ 3 * 3 + j / 3][board[i][j] - 1] = True
    dfs(board, 0)
    return board if flag else []
