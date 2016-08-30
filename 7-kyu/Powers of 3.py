import math
def largestPower(n):
    if n <= 0:
        return False
    temp = math.log10(n) / float(math.log10(3))
    return int(temp) if temp != int(temp) else int(temp)-1
