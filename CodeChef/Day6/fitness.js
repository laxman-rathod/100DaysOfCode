function Fit(input) {
  const lines = input.trim().split("\n");
  const t1 = parseInt(lines[0]);

  for (let i = 1; i <= t1; i++) {
    const distance = parseInt(lines[i]);
    const weeklyDistance = distance * 2 * 5; // Round trip for each of the 5 days
    console.log(weeklyDistance);
  }
}

process.stdin.setEncoding("utf8");
let input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  Fit(input);
});
