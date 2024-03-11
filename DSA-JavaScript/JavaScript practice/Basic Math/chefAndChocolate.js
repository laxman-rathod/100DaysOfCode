function Chocolate(input) {
  const lines = input.trim().split("\n");
  const T = parseInt(lines[0]);

  for (let i = 1; i <= T; i++) {
    const numbers = lines[i].split(" ").map(Number);
    const X = numbers[0]; // Number of 5 rupee coins
    const Y = numbers[1]; // Number of 10 rupee coins
    const Z = numbers[2]; // Cost of each chocolate

    // Write your code here

    let totalChocolates = Math.floor((X * 5 + Y * 10) / Z);
    console.log(totalChocolates);
  }
}

process.stdin.setEncoding("utf8");
let input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  Chocolate(input);
});
