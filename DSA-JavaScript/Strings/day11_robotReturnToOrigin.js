/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0,
    y = 0; // Initialize the position of the robot

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "U") {
      y++; // Move up
    } else if (moves[i] === "D") {
      y--; // Move down
    } else if (moves[i] === "R") {
      x++; // Move right
    } else if (moves[i] === "L") {
      x--; // Move left
    }
  }

  // Check if the robot returns to the origin (0, 0)
  return x === 0 && y === 0;
};
