/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (nums[mid] == target) 
        {
            return mid;
        }
        if (nums[mid] < target) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }

    return i;
};
