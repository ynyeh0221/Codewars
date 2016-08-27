import fractions

def an(n):
    a = []
    a += [7]
    for i in xrange(2, n+1):
        a += [a[i-2] + fractions.gcd(i, a[i-2])]
    return a

def gn(n):
    a = an(n)
    g = []
    g += [1]
    for i in xrange(1, n):
        g += [a[i] - a[i-1]]
    return g

def count_ones(n):
    g = gn(n)
    count = 0
    for i in g:
        if i == 1:
            count += 1
    return count
    
def pn(n):
    g = gn(10000*n)
    p = []
    for i in g:
        if i != 1 and i not in p:
            p += [i]
        if (len(p) == n):
            break
    return p

def max_pn(n):
    return max(pn(n))
    
def anOver(n):
    a = an(10000 * n)
    g = gn(10000 * n)
    ao = []
    for i in xrange(len(a)):
        if g[i] != 1:
            ao += [a[i] / (i+1)]
        if len(ao) == n:
            break
    return ao

def an_over_average(n):
    ao = anOver(n)
    return sum(ao) / n
