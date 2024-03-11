/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let sqareOfSortedArr = [];

  for (const x of nums) {
    sqareOfSortedArr.push(x * x);
  }

  sqareOfSortedArr.sort((a, b) => a - b);

  return sqareOfSortedArr;
};
