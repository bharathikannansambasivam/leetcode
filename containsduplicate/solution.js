

var containsDuplicate = function(nums) {
    
    nums=nums.sort();
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1])
            {
   return true;
  }
    }
    return false;
};


//Time omplexity O(n)
//Space Complexity O(n)
