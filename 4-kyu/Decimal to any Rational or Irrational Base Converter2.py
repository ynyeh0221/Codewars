from math import pi, log
bases = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

def converter(n, decimals=0, base=pi): 
    if n == 0:
        return "0" if not decimals else "0." + "0" * decimals
    res = "" if n > 0 else "-"
    n = abs(n)    
    for q in xrange(int(log(n, base)), -decimals - 1, -1):
        if q == -1:
            res += "."
        res += bases[int(n / base**q)]
        n %= base ** q
    return res
