// TODO: containsDuplicate:

var containsDuplicate = function (nums) {
  const noDuplicates = new Set();
  for (i = 0; i < nums.length; i++) {
    if (noDuplicates.has(nums[i])) {
      return true;
    } else {
      noDuplicates.add(nums[i]);
    }
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 4]));
