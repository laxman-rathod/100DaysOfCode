// Complete the code

function maxCustomers(X, Y) {
  const chef = X * Y;
  console.log(chef);
}

// Input related code. Please do not change this.
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (input) {
  const nums = input.split(" ");
  const x = parseInt(nums[0]);
  const y = parseInt(nums[1]);
  maxCustomers(x, y);
});
