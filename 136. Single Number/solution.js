/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    nums=nums.sort()
    for(i=0;i<nums.length;i++){
       for(j=i+1;j<nums.length;j++){
          if(nums[i]==nums[j]){
            nums.splice(i,2);
            i--;
            }
        }
        
    }
    return nums;
};