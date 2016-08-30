d = '123456789'
def order(sentence):
  sentence = sentence.split(' ')
  nums = []
  for i in sentence:
      for j in i:
          if j in d:
              nums.append([j, i])
              break
  nums = sorted(nums, key = lambda x : x[0])
  res = ''
  for i in nums:
      res += i[1] + ' '
  return res[:-1]
