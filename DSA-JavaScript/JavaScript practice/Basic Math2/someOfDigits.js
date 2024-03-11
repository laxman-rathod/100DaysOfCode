function Flow(input) {
  // Split the input into an array of lines
  const lines = input.trim().split("\n");

  // Extract the number of testcases
  const T = parseInt(lines[0]);

  // Iterate through each testcase
  for (let i = 1; i <= T; i++) {
    // Get the number for the current testcase
    const N = parseInt(lines[i]);

    let str = N.toString();
    let sum = 0;
    for (let x of str) {
      sum += Number(x);
    }
    console.log(sum);
  }
}

process.stdin.setEncoding("utf8");
let input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  Flow(input);
});
