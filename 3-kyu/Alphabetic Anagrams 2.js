//timeout

function listPosition(word) {
  //Return the anagram list position of the word
  let nums = [];
  for (let i = 0; i < word.length; i++)
    nums.push(word[i].charCodeAt());
  let sorted_nums = nums.slice().sort(function(a, b){return a-b;});
  let res = 1;
  while (nums.join(',') != sorted_nums.join(','))
  {
    nextPermutation(sorted_nums);
    res += 1;
  }
  return res;
}

var nextPermutation = function(nums) {
     for(var i = nums.length - 1; i > 0 && nums[i] <= nums[i - 1]; i--);
     if(i === 0)
     {
         reverse(0, nums.length - 1);
         return;
     }
     for(var j = i + 1; j < nums.length && nums[i - 1] < nums[j]; j++);
     swap(i - 1, j - 1);
     reverse(i, nums.length - 1);
     return;    
     
     function reverse(start, end){
         while(start < end){
             swap(start, end);
             start++;
             end--;
         }
     }
     function swap(i, j){
         var tmp = nums[i];
         nums[i] = nums[j];
         nums[j] = tmp;
     }
 };
