let twoSum = function (nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let pairsIndex = target - nums[i];
        if (pairsIndex in obj) {
            return [obj[pairsIndex], i];
        }
        obj[nums[i]] = i;
    }
};
