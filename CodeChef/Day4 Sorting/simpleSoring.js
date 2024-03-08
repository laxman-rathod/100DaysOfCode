function Tsort(input) {
  // Split the input into lines
  const lines = input.trim().split("\n");

  // Parse the number of integers in the list and the list itself
  var numbers = [];
  const n = parseInt(lines[0]);
  for (let i = 1; i <= n; i++) {
    numbers.push(parseInt(lines[i]));
  }
  // write your code here
}

// Set up input reading from standard input
process.stdin.setEncoding("utf8");
let input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {
  Tsort(input);
});
