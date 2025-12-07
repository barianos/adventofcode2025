// Prepare input
const fs = require('fs');
// const input = fs.readFileSync('testinput.txt', 'utf8').trim();
const input = fs.readFileSync('input.txt', 'utf8').trim();
const lines = input.split('\n').map(line => line.trim());


// Define needed data
let solution1 = 0
let solution2 = 0;

// Find the index of the empty line
const emptyLineIndex = lines.findIndex(line => line.trim() === '');

// Split into two arrays
const ranges = lines.slice(0, emptyLineIndex);
const items = lines.slice(emptyLineIndex + 1);

// Figure out the answer for part 1
for(item of items){
    let found = findNumberInRanges(Number(item));
    if(found){
        solution1++;
    }
}

// Figure out the answer for part 2
const cleanRanges = ranges
    .map(r => r.trim())
    .filter(r => r.includes('-'));

solution2 = countCovered(cleanRanges);

// Print the Solution
console.log({solution1, solution2});

// Helper Functions
function findNumberInRanges(num){
    for(range of ranges){
        let akra = range.split('-');
        
        if(num >= Number(akra[0]) && num <= Number(akra[1])){
            return true;
        }
    }
    return false;
}

function mergeRanges(ranges) {
    let parsed = ranges
        .map(r => r.split('-').map(Number))
        .sort((a, b) => a[0] - b[0]);

    const merged = [];
    let [curStart, curEnd] = parsed[0];

    for (let i = 1; i < parsed.length; i++) {
        const [start, end] = parsed[i];

        if (start <= curEnd + 1) {
            curEnd = Math.max(curEnd, end);
        } else {
            merged.push([curStart, curEnd]);
            [curStart, curEnd] = [start, end];
        }
    }

    merged.push([curStart, curEnd]);
    return merged;
}

function countCovered(ranges) {
    const merged = mergeRanges(ranges);
    console.log({merged});
    return merged.reduce((sum, [a, b]) => sum + (b - a + 1), 0);
}
