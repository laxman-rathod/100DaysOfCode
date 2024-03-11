// Complete the code

function checkWaterConsumption(tests) {
  let t = parseInt(tests[0]);
  for (let i = 1; i <= t; i++) {
    let nums = tests[i].split(" ");
    let x = Number(nums[0]);
    if (x >= 2000) {
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
  checkWaterConsumption(tests);
});
