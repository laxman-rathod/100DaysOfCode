function Favouritenum(input) {
  // Split the input into an array of lines
  const lines = input.trim().split("\n");

  // Extract the number of testcases
  const T = parseInt(lines[0]);

  // Iterate through each testcase
  for (let i = 1; i <= T; i++) {
    // Get the number for the current testcase
    const num = parseInt(lines[i]);

    if (num % 2 === 0) {
      if (num % 7 === 0) {
        console.log("ALICE");
      } else {
        console.log("CHARLIE");
      }
    } else {
      if (num % 9 === 0) {
        console.log("BOB");
      } else {
        console.log("CHARLIE");
      }
    }
  }
}

process.stdin.setEncoding("utf8");
let input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  Favouritenum(input);
});
