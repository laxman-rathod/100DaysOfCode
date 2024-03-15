/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(1); // Initialize result array with all 1's

  let productLeft = 1;
  for (let i = 0; i < n; i++) {
    result[i] *= productLeft; // Multiply by product of elements to the left
    productLeft *= nums[i]; // Update productLeft for the next iteration
  }

  let productRight = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= productRight; // Multiply by product of elements to the right
    productRight *= nums[i]; // Update productRight for the next iteration
  }

  return result;
};
