letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

def bin_to_hex(binary_string):
    # return the hexadecimal representation of the 
    # numerical equivalent of binary_string
    # Good Luck!
    num = 0
    for i in xrange(len(binary_string)):
        if binary_string[len(binary_string)-1-i] == '1':
            num += pow(2, i)
    res = ''
    while num > 0:
        temp = num % 16
        res += letters[temp]
        num /= 16
    return res[::-1] if res != '' else '0'
    
def hex_to_bin(hex_string):
    # return the binary representation of the
    # numerical equivalent of hex_string
    # Good Luck!
    hex_string = hex_string.lower()
    num = 0
    for i in xrange(len(hex_string)):
        num += pow(16, len(hex_string)-1-i) * letters.index(hex_string[i])
    res = ''
    while num > 0:
        temp = num % 2
        if temp == 0:
            res += '0'
        else:
            res += '1'
        num /= 2
    return res[::-1] if res != '' else '0'
