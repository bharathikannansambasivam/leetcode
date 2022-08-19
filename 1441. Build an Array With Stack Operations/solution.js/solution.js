/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let ans = [];
    let j = 0;

    for (let i = 1; i <= n; i++) {
        if (j > target.length - 1) {
            break;
        }
        if (target[j] === i) {
            ans.push("Push");
            j++;
        }
       else
       {
           ans.push("Push", "Pop");
       }
    }
    return ans;
};
