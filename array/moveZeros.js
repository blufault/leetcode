/**
 * Move Zeros
 *
 * Given an array nums, write a function to move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 *
 * Example:
 *  Input: [0, 1, 0, 3, 12]
 *  Output: [1, 3, 12, 0, 0]
 *
 *
 * Note:
 *  1. You must do this in-place without making a copy of the array
 *  2. Minimize the total number of operations.
 */

const moveZeros = function moveZeros(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] !== 0) {
          let tmp = nums[i];
          nums[i] = nums[j];
          nums[j] = tmp;
          break;
        }
      }
    }
  }
};
