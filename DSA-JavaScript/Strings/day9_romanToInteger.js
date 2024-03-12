/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanVal = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let currentVal = romanVal[s[i]];
    let nextVal = romanVal[s[i + 1]];

    if (currentVal < nextVal) {
      result -= currentVal - nextVal;
      i++;
    } else {
      result += currentVal;
    }
  }

  return result;
};
