// Complete the code

function checkEligibility(tests) {
  let t = parseInt(tests[0]);
  for (let i = 1; i <= t; i++) {
    let nums = tests[i].split(" ");
    let x = Number(nums[0]);
    let y = Number(nums[1]);
    let a = Number(nums[2]);
    if (a >= x && a < y) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}

// Input related code. Please do not change.
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (input) {
  const tests = input.split("\n");
  checkEligibility(tests);
});
