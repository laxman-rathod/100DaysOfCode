// Complete the code

function totalSquats(tests) {
  let t = parseInt(tests[0]);
  for (let i = 1; i <= t; i++) {
    let nums = tests[i].split(" ");
    let x = Number(nums[0]);
    console.log(x * 15);
  }
}

// Input related code. Please do not change.
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (input) {
  const tests = input.split("\n");
  totalSquats(tests);
});
