def is_balanced(source, caps):
    dic = {}
    stack = []
    for i in xrange(1, len(caps), 2):
        dic[caps[i]] = caps[i-1]
    for i in source:
        if i in caps:
            if i in dic and stack and stack[-1] == dic[i]:
                stack.pop()
            else:
                stack += [i]
    return True if not stack else False
