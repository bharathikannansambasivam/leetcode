/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let total = 0;
  let sum = [];

  for (i = 0; i < nums.length; i++) {
    total = nums[i] + total;
    sum.push(total);
  }
  return sum;
};


//time complexity O(n)
//space complexity O(n)
