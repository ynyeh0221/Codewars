def rotate_corners(matrix):
    if len(matrix) == 2 and len(matrix[0]) == 2:
        return matrix
    m = []
    for i in matrix:
        m += [i[:]]
    for i in xrange(len(matrix)):
        for j in xrange(len(matrix[0])):
            if type(matrix[i][j]) == int:
                continue
            elif matrix[i][j] == True:
                matrix[i][j] = 1
            elif matrix[i][j] == False:
                matrix[i][j] = 0
            else:
                matrix[i][j] = ord(matrix[i][j])
    corner = matrix[0][0] + matrix[len(matrix)-1][0] + matrix[0][len(matrix[0])-1] + matrix[len(matrix)-1][len(matrix[0])-1]
    noncorner = 0
    for i in xrange(len(matrix)):
        noncorner += sum(matrix[i])
    noncorner -= corner
    n = (corner * noncorner) % 4
    for i in xrange(n):
        m = rotate(m)[:]
    matrix = m[:]
    return [[matrix[0][0], matrix[0][len(matrix[0])-1]],[matrix[len(matrix)-1][0], matrix[len(matrix)-1][len(matrix[0])-1]]]
    
def rotate(matrix):
    matrix = matrix[::-1]
    m = []
    for j in xrange(len(matrix[0])):
        temp = []
        for i in xrange(len(matrix)):
            temp += [matrix[i][j]]
        m += [temp]
    return m
