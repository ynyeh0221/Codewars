def gap(g, m, n):
    preprime = 2
    for i in xrange(m, n+1):
        is_prime = True
        for j in xrange(2,int(n ** 0.5)+1):
            if i % j == 0:
                is_prime = False
                break
        if is_prime:
            if i - preprime == g:
                return [preprime, i]
            else:
                preprime = i
