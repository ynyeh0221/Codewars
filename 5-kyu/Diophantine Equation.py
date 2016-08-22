from fractions import gcd

def lcm(a, b):
    return abs(a * b) / gcd(a,b) if a and b else 0

def convertFracts(lst):
    d = []
    res = []
    for i in lst:
        d += [i[1]]
    l = d[0]
    for i in xrange(1, len(d)):
        l = lcm(l, d[i])
    for i in lst:
        res += [[i[0] * l / i[1],l]]
    return res
