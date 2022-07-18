/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let initialLength = nums.length
    for (i = 0; i < initialLength; i++) {
        nums.push(nums[i]);
    }
    return nums;
};


//time complexity : O(n) * O(n)= O(n^2)
//space complexity : O(1)