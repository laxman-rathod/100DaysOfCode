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
