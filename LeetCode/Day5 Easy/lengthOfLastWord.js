/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let space = "";
  let word = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      space += " ";
    } else {
      word = word.concat(s[i]); // Concat the last characters in to the word var.

      if (s[i - 1] === " " || i === 0) {
        // Break the loop if a complete word is found
        break;
      }
    }
  }
  return word.length; // Return the length of the last word
};
