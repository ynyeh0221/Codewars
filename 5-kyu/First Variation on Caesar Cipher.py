letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
def moving_shift(s, shift):
    str = ''
    for i in s:
        if i.upper() not in letters:
            str += i
        else:
            if ord(i) >= 97:
                str += chr((ord(i) - ord('a') + shift) % 26 + ord('a'))
            else:
                str += chr((ord(i) - ord('A') + shift) % 26 + ord('A'))
        shift += 1
    length = len(str) / 4
    final = len(str) % 4
    while length-1 >= final + 4:
        length -= 1
        final += 4
    return [str[:length]] + [str[length:2*length]] + [str[2*length:3*length]] + [str[3*length:4*length]] + [str[4*length:len(str)]]

def demoving_shift(s, shift):
    s = ''.join(s)
    str = ''
    for i in s:
        if i.upper() not in letters:
            str += i
        else:
            if ord(i) >= 97:
                str += chr((ord(i) - ord('a') - shift + 26 * len(s)) % 26 + ord('a'))
            else:
                str += chr((ord(i) - ord('A') - shift + 26 * len(s)) % 26 + ord('A'))
        shift += 1
    return str
