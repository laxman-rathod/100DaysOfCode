/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  // Convert the string to an array of characters for easier manipulation
  let chars = s.split("");
  let left = 0,
    right = s.length - 1;

  // Helper function to check if a character is an English letter
  const isLetter = (char) => {
    return /[a-zA-Z]/.test(char);
  };

  // Swap English letters from left and right pointers
  while (left < right) {
    if (isLetter(chars[left]) && isLetter(chars[right])) {
      // Swap only if both characters at left and right pointers are letters
      let temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;
      left++;
      right--;
    } else if (!isLetter(chars[left])) {
      // Move left pointer if the character at left pointer is not a letter
      left++;
    } else if (!isLetter(chars[right])) {
      // Move right pointer if the character at right pointer is not a letter
      right--;
    }
  }

  // Convert the array back to string and return
  return chars.join("");
};
