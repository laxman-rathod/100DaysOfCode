function Candystore(input) {
  const lines = input.trim().split("\n");
  const T = parseInt(lines[0]);

  for (let i = 1; i <= T; i++) {
    const [X, Y] = lines[i].split(" ").map(Number);
    // Write your code here

    let totalAmount = 0;

    if (Y <= X) {
      totalAmount = Y;
    } else {
      totalAmount = X + 2 * (Y - X);
    }

    console.log(totalAmount);
  }
}

process.stdin.setEncoding("utf8");
let input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  Candystore(input);
});
