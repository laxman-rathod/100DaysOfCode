// Complete the code
function dnaStorage(tests) {
  let binaryStr = {
    "00": "A",
    "01": "T",
    10: "C",
    11: "G",
  };
  let result = "";
  for (let i = 1; i < tests.length; i += 2) {
    // length of the binary string
    const n = parseInt(tests[i]);
    // binary string
    const s = tests[i + 1];
    for (let j = 0; j < s.length; j += 2) {
      const pair = s.slice(j, j + 2);
      result += binaryStr[pair];
    }
    result += "\n";
  }
  console.log(result);
}

// Input related code. Please do not change.
process.stdin.setEncoding("utf8");
let inputString = "";
process.stdin.on("data", function (input) {
  inputString += input;
});

process.stdin.on("end", function () {
  const tests = inputString.trim().split("\n");
  dnaStorage(tests);
});
