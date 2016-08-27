def dec2FactString(nb):
    convert = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    f = 1
    n = 2
    while f < nb:
        if n * f < nb:
            f *= n
            n += 1
        else:
            n -= 1
            break
    res = ''
    while n > 0:
        res += convert[nb / f]
        nb %= f
        f /= n
        n -= 1
    return res + '0'
    
def factString2Dec(string):
    convert = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    string = string[::-1]
    s = 0
    f = 1
    for i in xrange(1, len(string)):
        f *= i
        s += f * convert.index(string[i])
    return s
