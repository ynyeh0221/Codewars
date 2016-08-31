from math import *
def decompose(n):
    res = []
    if '.' in n:
        n = n.split('.')
        if n[0] != '0':
            res += [n[0]]
        n = n[1] + '/' + str(int(pow(10, len(n[1]))))
    n = n.split('/')
    if len(n) == 1:
        return res
    if int(n[0]) >= int(n[1]):
        res += [str(int(n[0]) / int(n[1]))]
        n = [str(int(n[0]) % int(n[1])), n[1]]
    while n[0] != '0':
        x = n[0]
        y = n[1]
        res += ['1/' + str(int(ceil(int(y) / float(x))))]
        n = str(-int(y) % int(x)) + '/' + str(int(y) * int(ceil(int(y) / float(x))))
        n = n.split('/')
    return res
