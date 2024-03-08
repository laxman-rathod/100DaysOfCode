/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  let arr = [];
  nums.sort((a, b) => b - a); //sort nums array in descending order to get min items from the last of array.
  while (nums.length) {
    let alice = nums.pop();
    let bob = nums.pop();
    arr.push(bob);
    arr.push(alice);
  }
  return arr;
};
