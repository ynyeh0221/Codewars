def replace_all(obj, find, replace):
    if type(obj) is str:
        res = ''
        for i in obj:
            if i == find:
                res += replace
            else:
                res += i
        return res
    else:
        for i in xrange(len(obj)):
            if obj[i] == find:
                obj[i] = replace
        return obj
