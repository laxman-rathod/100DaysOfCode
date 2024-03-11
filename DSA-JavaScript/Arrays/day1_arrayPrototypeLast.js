/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  if (this.length > 0) {
    // Check if the array not empty
    return this[this.length - 1]; // Return last element
  } else {
    return -1; // Return -1 for empty array
  }
};
 
/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
