import math
def word_square(letters):
    length = int(math.sqrt(len(letters)))
    if length ** 2 != len(letters):
        return False
    dic = {}
    for i in letters:
        if i not in dic:
            dic[i] = 0
        dic[i] += 1
    odd = 0
    for i in dic:
        if dic[i] % 2 == 1:
            odd += 1
        if odd > length:
            return False
    return True
