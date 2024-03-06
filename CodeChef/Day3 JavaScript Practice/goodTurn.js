// Complete the code

function isGoodTurn(tests) {
  let t = parseInt(tests[0]); //total no of test cases.
  for (let i = 1; i <= t; i++) {
    let nums = tests[i].split(" ");
    let x = Number(nums[0]);
    let y = Number(nums[1]);
    if (x + y > 6) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

// Input related code. Please do not change.
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (input) {
  const tests = input.split("\n");
  isGoodTurn(tests);
});
