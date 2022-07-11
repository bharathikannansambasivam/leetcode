/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let pairs=0;
    
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++)
        {
   if(nums[i]==nums[j])
      {
    
    pairs=pairs+1;
          
      }
        
          }
        }
    return pairs;
    
};