def race(v1, v2, g):
    h = g/(v2-v1)
    m = (g % (v2-v1)) * 60 / (v2-v1)
    s = (((g % (v2-v1)) * 60) % (v2-v1)) * 60 / (v2-v1)
    return None if v1 >= v2 else [h, m, s]
