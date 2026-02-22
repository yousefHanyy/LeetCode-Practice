const nums = [-1, 1, 0, -3, 3];
var productExceptSelf = function (nums) {
  //// will use to spliced to not mutate original array:
  //   const map = new Map();
  //   let product = 1;
  //   for (i = 0; i < nums.length; i++) {
  //     map.set(i, nums.toSpliced(i, 1));
  //   }
  //   map.forEach((value) => {
  //     return (product *= value);
  //   });
  //   return map;
  let result = [];
  let leftProduct = 1;
  let rightProduct = 1;
  for (i = 0; i < nums.length; i++) {
    result[i] = leftProduct; //* result =1,1,2,6
    leftProduct *= nums[i]; //* 1,1x2=2,2x3=6
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct; //* 6,2x4=8,
    rightProduct *= nums[i]; //* 4
  }
  return result;
};
//! The problem was the O(n) time complexity requirement.
console.log(productExceptSelf(nums));
