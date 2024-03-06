// Complete the code

function addTwoNumbers(tests) {
  let t = parseInt(tests[0]);

  // Loop through all test cases starting from index 1
  for (let i = 1; i <= t; i++) {
    // For each test case, split the line into two numbers
    const nums = tests[i].split(" ");
    // Parse the two numbers
    let a = parseInt(nums[0]);
    let b = parseInt(nums[1]);
    // Output the sum of the two numbers
    console.log(a + b);
  }
}

// Input related code. Please do not change.
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (input) {
  const tests = input.split("\n");
  addTwoNumbers(tests);
});
