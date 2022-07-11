/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let empty=[];
     for(i=0;i<n;i++){
       
     empty.push(nums[i],nums[i+n]);
     }
     return empty;
 };