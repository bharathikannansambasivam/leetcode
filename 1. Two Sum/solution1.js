let twoSum = function (nums, target) {
    let index = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            let x = nums[i] + nums[j];
            if (x == target) {
                index = [i, j];
                return index;
            }
        }

    }

};

   //time complexity O(n^2)
   //space complexity O(n)


