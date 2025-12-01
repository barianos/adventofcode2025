// Prepare input
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim();
const lines = input.split(/\r?\n/);
console.log(lines);

// Define needed data
let cur=50;
const max = 99;
const min = 0;
let cnt = 0; 

// Do the math
for (const line of lines) {
    const turnChar = line[0];
    const distance = Number(line.slice(1));

    const isAdd = turnChar === 'L';

    console.log({ isAdd, distance, cur });

    if(isAdd){
        cur += distance;
        while(cur > max){
            cur = cur - 99;
        }
    }
    else{
        cur -= distance;
        while(cur < min){
            cur *= -1;
            cur = 100 - cur;
        }

    }

    if(cur === 0){
        cnt++;
    }


}

console.log(cnt);



