from itertools import product

def multiiter(*params):
    return product(*map(range, params))
