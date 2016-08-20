function twoSum(numbers, target) {
  let dic = {};
  for (let i = 0; i < numbers.length; i++)
    dic[numbers[i]] = i;
  for (let i = 0; i < numbers.length; i++)
  {
    if ((target - numbers[i]) in dic && dic[target - numbers[i]] > i)
      return [i, dic[target - numbers[i]]];
  }
}
