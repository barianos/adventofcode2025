// Prepare input
const fs = require('fs');
// const input = fs.readFileSync('testinput.txt', 'utf8').trim();
const input = fs.readFileSync('input.txt', 'utf8').trim();
const lines = input.split(/\r?\n/);

// Define needed data
let cur=50;
const max = 100;
let part1 = 0;
let part2 = 0; 

// Figure out the answer
for (const line of lines) {
    const turnChar = line[0];
    const distance = Number(line.slice(1));

    const isAdd = turnChar === 'L';

    for (let i = 0; i < distance; i++) {
        if (isAdd) {
            cur = (cur - 1 + max) % max;
        } else {
            cur = (cur + 1) % max;
        }
        //part 2 Solution
        if (cur === 0) {
            part2++;
        }
    }
    //part 1 Solution
    if (cur === 0) {
        part1++;
    }
    
}

// Print the Solution
console.log({part1, part2});



