// TODO: twoSum PROBLEM:

var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
//**! Better use map for performance */
let twoSumUsingMap = function (nums, target) {
  const map = new Map();
  for (i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    if (map.has(needed)) {
      //**I am checking here if the map already has the value needed for the summing */
      return [map.get(needed), i];
    }
    map.set(nums[i], i);
  }
};
