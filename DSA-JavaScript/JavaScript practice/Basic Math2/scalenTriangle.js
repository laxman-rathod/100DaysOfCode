function Scalene(input) {
  const lines = input.trim().split("\n");
  const t1 = parseInt(lines[0]);

  for (let i = 1; i <= t1; i++) {
    const [a, b, c] = lines[i].split(" ").map(Number);

    // Write your code here

    if (a === b || b === c || a === c) {
      console.log("NO");
    } else {
      console.log("YES");
    }
  }
}

process.stdin.setEncoding("utf8");
let input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  Scalene(input);
});
