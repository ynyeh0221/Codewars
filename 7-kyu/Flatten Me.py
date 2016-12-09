def flatten_me(lst):
    global res
    res = []
    helper(lst)
    return res
    
def helper(lst):
    global res
    for item in lst:
        if isinstance(item, list):
           helper(item)
        else:
            res += [item]
