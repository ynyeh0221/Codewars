def validBraces(string):
  stack = []
  for i in string:
      if i == '(' or i == '[' or i == '{':
          stack += [i]
      else:
          if not stack or (i == ')' and stack.pop() != '(') or (i == ']' and stack.pop() != '[') or (i == '}' and stack.pop() != '{'):
              return False
  return True if not stack else False
