// your code goes here
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  while (t--) {
    let val = parseInt(readLine());
    let obj = new Solution();
    let res = obj.binarySearch(val);
    process.stdout.write(`${res}\n`);
  }
}

class Solution {
  //Formula is H(H+1)/2 <=0
  binarySearch(data) {
    const maxHeight = (-1 + Math.sqrt(1 + 8 * data)) / 2;
    return Math.floor(maxHeight);
  }
}
