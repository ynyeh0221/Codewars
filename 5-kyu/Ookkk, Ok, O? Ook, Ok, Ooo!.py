def okkOokOo(s):
    if s[-1] == '!':
        s = s[ : -1]
    s = s.split('?');
    res = '';
    for i in s:
        ascii = 0
        for j in i.lower():
            if j == 'k':
                ascii = 2 * ascii + 1
            if j == 'o':
                ascii *= 2
        res += chr(ascii)
    return res
