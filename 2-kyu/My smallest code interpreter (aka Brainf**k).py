def brain_luck(code, input):
    memory = []
    stack = []
    dic = {}
    res = ''
    code = list(code)
    for i in xrange(len(code)):
        if code[i] == ']':
            while len(stack) > 0 and stack[len(stack)-1][1] != '[':
                stack.pop()
            temp = stack.pop()
            dic[i] = temp[0]
            dic[temp[0]] = i
        else:
            stack.append([i, code[i]])
    ind = 0
    input = list(input)
    i = 0
    while i < len(code):
        while ind >= len(memory):
            memory.append(0)
        if code[i] == ',':
            memory[ind] = ord(input.pop(0))
        elif code[i] == '>':
            ind += 1
        elif code[i] == '<':
            ind -= 1
        elif code[i] == '+':
            memory[ind] = 0 if memory[ind] == 255 else memory[ind] + 1
        elif code[i] == '-':
            memory[ind] = 255 if memory[ind] == 0 else memory[ind] - 1
        elif code[i] == '.':
            res += chr(memory[ind])
        elif code[i] == '[':
            if memory[ind] == 0:
                i = dic[i]
        elif code[i] == ']':
            if memory[ind] != 0:
                i = dic[i]
        i += 1
    return res
