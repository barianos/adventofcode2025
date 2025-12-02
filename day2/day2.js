// Prepare input
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim();
const lines = input.split(',');

let sum = 0;
console.log(lines.length);
for (const line of lines) {
    console.log(line);
    let parts = line.split('-');
    for( const part of parts){
        console.log(part);
        // if (part.startsWith('0')){
        //     sum += Number.parseInt(part);
        //     continue;
        // }
        if(isInvalidID(part)){
            console.log('regex 1');
            sum += Number.parseInt(part);
        }
    }

}

function isInvalidID(num) {
    const s = String(num);

    // Length must be even
    if (s.length % 2 !== 0) return false;

    const half = s.length / 2;
    const left = s.slice(0, half);
    const right = s.slice(half);

    return left === right;
}


function isRepeatedPattern(str) {
    // if(/(\d)\1/.test(str)){
    //     return true;
    // }
    // if(/(\d+)\1/.test(str)){
    //     return true;
    // }
    if(/(\d+)\1+/.test(str))
        return true;
    return false;
    //return /^(\d+)\1$/.test(str);
}
console.log(sum);

//44371993918 -- too high
//50331617343
//50331617343