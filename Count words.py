skip = {'a': 1, 'the': 1, 'on': 1, 'at': 1, 'of':1, 'upon': 1, 'in': 1, 'as': 1}

def word_count(s):
    num = 0
    start = 0
    i = 0
    while i < len(s):
        if s[i].isalpha():
            start = i
            while i < len(s) and s[i].isalpha():
                i += 1
            if s[start:i].lower() not in skip:
                num += 1
            i -= 1
        i += 1
    return num
