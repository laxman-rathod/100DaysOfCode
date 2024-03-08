function WaterCases(input) {
  const lines = input.trim().split("\n");
  const T = parseInt(lines[0]);
  let index = 1;

  for (let t = 0; t < T; t++) {
    const N = parseInt(lines[index++]);
    const likes = lines[index++].split(" ").map(Number);
    const comments = lines[index++].split(" ").map(Number);

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
  WaterCases(input);
});
