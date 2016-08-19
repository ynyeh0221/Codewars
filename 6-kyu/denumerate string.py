def denumerate(enum_list):
    #rebuild the string
    res = ''
    try:
        enum_list = sorted(enum_list, key = lambda x: x[0])
        for i in xrange(len(enum_list)):
            if enum_list[i][0] != i or len(enum_list[i]) != 2 or not enum_list[i][1].isalnum() or len(enum_list[i][1]) != 1:
                return False
            res += enum_list[i][1]
        return res if res != '' else False
    except:
        return False
