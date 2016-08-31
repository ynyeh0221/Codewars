from math import *
bases = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
def converter(n, decimals=0, base=pi):
    sign = ''
    if n < 0:
        n = -n
        sign = '-'
    res = ''
    power = base
    length = 2
    while n > power * base:
        power *= base
        length += 1
    if power * base == n:
        res += '1'
        for i in xrange(length):
            res += '0'
    else:
        for i in xrange(length):
            res += bases[int(n / power)]
            n %= power
            power /= base
    ind = 0
    for i in xrange(length-1):
        if res[i] == '0':
            ind = i+1
        else:
            break
    res = res[ind:]
    for i in xrange(decimals):
        if i == 0:
            res += '.'
        n *= base
        res += bases[int(n)]
        n -= int(n)
    return sign + res
