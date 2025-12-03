// Prepare input
const fs = require('fs');
// const input = fs.readFileSync('testinput.txt', 'utf8').trim();
const input = fs.readFileSync('input.txt', 'utf8').trim();
const lines = input.split(',');


// Define needed data
let sum = 0;
let part2 = 0;

// Figure out the answer
for (const line of lines) {
    const [start, end] = line.split('-').map(Number);
    for (let n = start; n <= end; n++) {
        if (isInvalidID(n)) {
            sum += n;
        }
        if(regex(n)){
            part2 += n;
        }
    }
}

function isInvalidID(num) {
    const s = String(num);

    if (s.length % 2 !== 0) return false;

    const half = s.length / 2;
    const left = s.slice(0, half);
    const right = s.slice(half);

    return left === right;
}

function regex(num){
    return /^(?<p>.+)\k<p>+$/.test(num);
}

// Print the Solution
console.log({sum,part2});