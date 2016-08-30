def count_sel(lst):
    dic = {}
    for i in lst:
        if i not in dic:
            dic[i] = 0
        dic[i] += 1
    occur_one = 0
    max_occur = 0
    for i in dic:
        if dic[i] == 1:
            occur_one += 1
        max_occur = max(max_occur, dic[i])
    max_occur_lst = []
    for i in dic:
        if dic[i] == max_occur:
            max_occur_lst += [i]
    return [len(lst), len(dic), occur_one, [sorted(max_occur_lst), max_occur]]
