class Calculator(object):
  def evaluate(self, string):
    string = string.replace(' ', '')
    op = '+'
    i = 0
    stack = []
    temp = 0
    start = 0
    while i < len(string):
        if string[i].isdigit():
            start = i
            while i < len(string) and (string[i].isdigit() or string[i] == '.'):
                i += 1
            i -= 1
            temp = float(string[start:i+1])
            if op == '+':
                stack += [temp]
            elif op == '-':
                stack += [-temp]
            elif op == '*':
                stack += [stack.pop() * temp]
            else:
                stack += [stack.pop() / temp]
            temp = 0
        else:
            op = string[i]
        i += 1
    return round(sum(stack), 3)
