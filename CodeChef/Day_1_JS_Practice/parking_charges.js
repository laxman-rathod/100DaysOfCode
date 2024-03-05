// Complete the code

function totalAmount(x, y, h) {
  // Calculate total parking charges
  if (h === 1) {
    console.log(x);
  } else {
    console.log(x + y * (h - 1));
  }
}

// Input related code. Please do not change this.
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (input) {
  const nums = input.trim().split(" ");
  const x = parseInt(nums[0]);
  const y = parseInt(nums[1]);
  const h = parseInt(nums[2]);
  totalAmount(x, y, h);
});
