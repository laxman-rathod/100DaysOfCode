/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // Convert numbers to strings

  const numsAsStrings = nums.map((num) => String(num));

  // Custom sorting function

  const customSort = (a, b) => {
    const num1 = a + b;

    const num2 = b + a;

    return num2 - num1;
  };

  // Sort using custom sorting function

  numsAsStrings.sort(customSort);

  // Handle case where the largest number is "0"

  if (numsAsStrings[0] === "0") {
    return "0";
  }

  // Concatenate sorted strings

  const largestNum = numsAsStrings.join("");

  return largestNum;
};
