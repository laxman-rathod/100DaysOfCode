/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x.toString();

  for (let i = 1; i <= str.length / 2; i++) {
    if (str[i - 1] !== str[str.length - i]) {
      return false;
    }
  }
  return true;
};
