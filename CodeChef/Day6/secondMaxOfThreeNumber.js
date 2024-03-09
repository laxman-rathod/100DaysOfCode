function Sndmax(input) {
  const lines = input.trim().split("\n");
  const n1 = parseInt(lines[0]);

  for (let i = 1; i <= n1; i++) {
    const numbers = lines[i].split(" ").map(Number);
    // Write your code here

    const secondMax = Math.min(
      Math.max(numbers[0], numbers[1]),
      Math.min(
        Math.max(numbers[1], numbers[2]),
        Math.max(numbers[0], numbers[2])
      )
    );
    console.log(secondMax);
  }
}

process.stdin.setEncoding("utf8");
let input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  Sndmax(input);
});
