// Prepare input
const fs = require('fs');
// const input = fs.readFileSync('testinput.txt', 'utf8').trim();
const input = fs.readFileSync('input.txt', 'utf8').trim();
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
const maxWidth = Math.max(...lines.map(l => l.length));
const grid = lines.map(line => line.padEnd(maxWidth, " "));

let visualCols = [];
for (let c = maxWidth - 1; c >= 0; c--) {
    visualCols.push(grid.map(row => row[c]));
}

const isBlank = col => col.every(ch => ch.trim() === "");

let problems = [];
let currentProblemCols = []; 

for (const col of visualCols) {
    if (isBlank(col)) {
        if (currentProblemCols.length > 0) {
            problems.push(currentProblemCols);
            currentProblemCols = [];
        }
    } else {
        currentProblemCols.push(col);
    }
}
if (currentProblemCols.length > 0) {
    problems.push(currentProblemCols);
}

function extractProblemValues(cols) {
    const values = [];
    const operatorRegex = /([*+])$/;
    for (const col of cols) {
        let valString = col.join("").trim(); 
        
        const match = valString.match(operatorRegex);
        
        if (match) {
            const numberPart = valString.replace(operatorRegex, '').trim();
            if (numberPart !== "") {
                values.push(numberPart);
            }
            
            const operatorPart = match[1];
            values.push(operatorPart);
        } else {
            if (valString !== "") {
                values.push(valString);
            }
        }
    }
    return values;
}



for (const problem of problems) {
    const vals = extractProblemValues(problem); 
    let currentNumbers = [];

    for (const val of vals) {
        if (val === "*" || val === "+") {
            const op = ops[val];
            
            if (currentNumbers.length > 0) {
                const numbers = currentNumbers.map(Number); 
                const result = numbers.reduce(op);
                solution2 += result;
            }
            currentNumbers = [];

        } else if (val !== "") {
            currentNumbers.push(val);
        }
    }
}

// Print the Solution
console.log({solution1, solution2});

// Helper Functions