//!Kadane's algorithm: Ask yourself what is the maximum subarray ending at this index i am at.
//! (REALLY HELPFUL VIDEO): https://www.youtube.com/watch?v=86CQq3pKSUw

//todo: The idea is to check :
//? current subarray (nums[i])
//? vs
//? the last max subarray (currentMaxSubArray) + current subarray (nums[i])
nums = [1];
var maxSubArray = function (nums) {
  let currentMaxSubArray = nums[0];
  let globalMaxSubArray = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMaxSubArray = Math.max(nums[i], currentMaxSubArray + nums[i]);
    globalMaxSubArray = Math.max(currentMaxSubArray, globalMaxSubArray);
  }
  return globalMaxSubArray;
};
console.log(maxSubArray(nums));
//* A = [-2,3,2,-1];
//* i= 0,1,2,3
//* currentMax= -2, 3, 5 , 4
//* globalMax= -2, 3, 5 , 5
