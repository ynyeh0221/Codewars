def determinant(m):
    if len(m) == 1:
        return m[0][0]
    return calc(m)
    
def calc(matrix):
    if len(matrix) == 2:
        return matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1]
    res = 0
    sign = 1
    for i in xrange(len(matrix[0])):
        temp = []
        for j in xrange(1, len(matrix)):
            temp += [[]]
            for k in xrange(len(matrix[0])):
                if k != i:
                    temp[j-1] += [matrix[j][k]]
        res += matrix[0][i] * sign * calc(temp[:])
        sign *= -1;
    return res
