// Prepare input
const fs = require('fs');
// const input = fs.readFileSync('testinput.txt', 'utf8').trim();
const input = fs.readFileSync('input.txt', 'utf8').trim();
const lines = input.split('\n').map(line => line.trim());


// Define needed data
let solution1 = 0
let solution2 = 0;

// Find the index of the empty line
const emptyLineIndex = lines.indexOf('');

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

// Print the Solution
console.log({solution1, solution2});

// Helper Functions
function findNumberInRanges(num){
    for(range of ranges){
        let akra = range.split('-');
        console.log({num, akra});
        
        if(num >= Number(akra[0]) && num <= Number(akra[1])){
            return true;

        }
    }
    return false;

}