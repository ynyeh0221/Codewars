nearby = [[0,8],[1,2,4],[1,2,3,5],[2,3,6],[1,4,5,7],[2,4,5,6,8],[3,5,6,9],[4,7,8],[5,7,8,9,0],[9,8,6]]

def get_pins(observed):
    res = []
    dfs([], 0, observed, res)
    return res
    
def dfs(path, ind, observed, res):
    if ind == len(observed):
        res += [''.join(str(e) for e in path)]
        return
    for i in xrange(len(nearby[int(observed[ind])])):
        dfs(path + [nearby[int(observed[ind])][i]], ind+1, observed, res)
