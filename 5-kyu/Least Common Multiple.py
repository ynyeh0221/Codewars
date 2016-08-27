from fractions import gcd
def lcm(*args):
  return reduce(lambda a,b: a*b/gcd(a,b), args)
