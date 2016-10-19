import math

def rotate90(A):
    A = A[::-1]
    for i in xrange(len(A)):
        for j in xrange(i+1, len(A[0])):
            A[i][j], A[j][i] = A[j][i], A[i][j]
    return A

def rotate_90(A):
    for i in xrange(len(A)):
        for j in xrange(i+1, len(A[0])):
            A[i][j], A[j][i] = A[j][i], A[i][j]
    A = A[::-1]
    return A

def code(s):
    # your code
    if s == "":
        return ""
    l = len(s)
    n = int(math.ceil(math.sqrt(l)))
    while len(s) < n ** 2:
        s += chr(11)
    square = []
    for i in xrange(0, n*n, n):
        square += [list(s[i:i+n])]
    square = rotate90(square)
    return '\n'.join(''.join(row) for row in square)

def decode(s):
    # your code
    if s == "":
        return ""
    square = s.split("\n")
    for i in xrange(len(square)):
        square[i] = list(square[i])
    square = rotate_90(square)
    s = ''.join(''.join(row) for row in square)
    ind = len(s)-1
    while ind >= 0:
        if s[ind] == chr(11):
            ind -= 1
        else:
            break
    return s[:ind+1]
