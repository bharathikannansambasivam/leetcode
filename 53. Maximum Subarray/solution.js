/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (n) {
    solution = n[0];
    for (i = 1; i < n.length; i++) {

        n[i] = Math.max(n[i], n[i] + n[i - 1]);
        solution = Math.max(n[i], solution);
    }
    return solution;
};