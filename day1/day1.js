// Prepare input
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim();
const lines = input.split(/\r?\n/);
// console.log(lines);

// Define needed data
let cur=50;
const max = 100;
const min = 0;
let cnt = 0; 

// Do the math
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
        //part 2
        if (cur === 0) {
            cnt++;
        }
    }
    // //part 1
    // if (cur === 0) {
    //     cnt++;
    // }
    
}

console.log(cnt);



