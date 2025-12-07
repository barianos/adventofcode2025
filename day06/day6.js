// Prepare input
const fs = require('fs');
// const input = fs.readFileSync('testinput.txt', 'utf8').trim();
const input = fs.readFileSync('input.txt', 'utf8').trim();
// const lines = input.split('\n').map(line => line.trim());
const lines = input.split('\n');

// Define needed data
const rows = lines.map(line => line.match(/\S+/g));
const columns = rows[0].map((_, colIndex) =>
    rows.map(row => row[colIndex])
);
const ops = {
  "*": (a, b) => a * b,
  "+": (a, b) => a + b
};

let solution1 = 0
let solution2 = 0;

// Figure out the answer for part 1
for (const col of columns) {
    const opSymbol = col[col.length - 1];
    const nums = col.slice(0, -1).map(Number);
    const op = ops[opSymbol];
    const result = nums.reduce(op);
    solution1 += result;

}

// Figure out the answer for part 2

// Print the Solution
console.log({solution1, solution2});

// Helper Functions