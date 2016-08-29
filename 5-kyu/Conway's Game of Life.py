def next_gen(board):
        if len(board) == 0:
            return []
        changes=[]
        m, n=len(board), len(board[0])
        for i in xrange(m):
            for j in xrange(n):
                lives=0
                if i-1>=0:
                    lives+=board[i-1][j]
                    if j-1>=0:
                        lives+=board[i-1][j-1]
                    if j+1<n:
                        lives+=board[i-1][j+1]
                if i+1<m:
                    lives+=board[i+1][j]
                    if j-1>=0:
                        lives+=board[i+1][j-1]
                    if j+1<n:
                        lives+=board[i+1][j+1]
                if j-1>=0:
                    lives+=board[i][j-1]
                if j+1<n:
                    lives+=board[i][j+1]
                if board[i][j]==1 and lives<2:
                    changes+=[i*n+j]
                elif board[i][j]==1 and lives>3:
                    changes+=[i*n+j]
                elif board[i][j]==0 and lives==3:
                    changes+=[i*n+j]
        for i in changes:
            board[i/n][i%n]=abs(board[i/n][i%n]-1)
        return board
