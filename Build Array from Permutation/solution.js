var buildArray = function (nums) {
  ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
};

//time complexity O(n)
//space complexity O(n)
