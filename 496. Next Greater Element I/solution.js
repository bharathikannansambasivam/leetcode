/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let arr = [];

    for (let i = 0; i < nums1.length; i++) {
        let max = -1;
        let val = nums2.indexOf(nums1[i]);

        for (let j = val; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                max = nums2[j];
                break;

            }
        }
        arr.push(max);
    }
    return arr;
};