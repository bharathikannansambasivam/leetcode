var shuffle = function (nums, n) {
  let empty = [];
  for (i = 0; i < n; i++) {
    empty.push(nums[i], nums[i + n]);
  }
  return empty;
};

//Time complexity    O(n)
//Space complexity    O(n)
