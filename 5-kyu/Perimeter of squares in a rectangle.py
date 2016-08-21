def perimeter(n):
    sum = 2
    p1 = p2 = 1
    for i in xrange(2, n+1):
        temp = p2
        p2 = p1 + p2
        p1 = temp
        sum += p2
    return 4 * sum if n > 1 else 1
