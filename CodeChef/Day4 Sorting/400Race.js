function Race400(input) {
  // Split the input into an array of test cases
  const testCases = input.trim().split("\n").slice(1); // Remove the first line (number of test cases)

  // Process each test case
  for (const testCase of testCases) {
    // Parse the times taken by Alice, Bob, and Charlie for the current test case
    const [x, y, z] = testCase.split(" ").map(Number);

    // Write your code here
  }
}

// Set up input reading from standard input
process.stdin.setEncoding("utf8");
let input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {
  Race400(input);
});
