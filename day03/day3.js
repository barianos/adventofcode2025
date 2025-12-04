// Prepare input
const fs = require('fs');
// const input = fs.readFileSync('testinput.txt', 'utf8').trim();
const input = fs.readFileSync('input.txt', 'utf8').trim();
const lines = input.split('\n');


// Define needed data
let joltage = 0;
let bigJoltage = 0;


// Figure out the answer for part 1
for (const line of lines) {
    const individuals = line.trim("\r").split("");
    let max = 0;
    let secondMax = 0;
    let maxPos = 0;
    for(let i=0; i< individuals.length -1; i++){
        if(individuals[i]>max){ 
            max = Number(individuals[i]);
            maxPos=i;
        }
    }
    for(let i=maxPos + 1; i< individuals.length; i++){
        if(individuals[i]>secondMax){ 
            secondMax = Number(individuals[i]);
        }
    }
    joltage+= (max*10) + secondMax;
}

// Figure out the answer for part 2
for (const line of lines) {
    const digits = line.trim().split("").map(Number);
    const keep = 12;
    let toRemove = digits.length - keep;
    const stack = [];

    for (let d of digits) {
        while (toRemove > 0 && stack.length > 0 && stack[stack.length - 1] < d) {
            stack.pop();
            toRemove--;
        }
        stack.push(d);
    }

    while (toRemove > 0) {
        stack.pop();
        toRemove--;
    }

    bigJoltage += Number(stack.slice(0, keep).join(""));

}
// Print the Solution
console.log({joltage, bigJoltage});