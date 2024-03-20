//Largest Number
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

//Second largest digit in a string
/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  // Regular expression to match numerical digits

  const digitRegex = /\d/g;

  // Extract all numerical digits from the string

  const digits = s.match(digitRegex);

  if (!digits || digits.length < 2) {
    return -1; // No second largest digit
  }

  // Convert digits to numbers and remove duplicates

  const uniqueDigits = [...new Set(digits.map(Number))];

  // Sort the unique digits in descending order

  uniqueDigits.sort((a, b) => b - a);

  // Check if there is a second largest digit

  if (uniqueDigits.length > 1) {
    return uniqueDigits[1]; // Second largest digit
  } else {
    return -1; // No second largest digit
  }
};
