// Prepare input
const fs = require('fs');
// const input = fs.readFileSync('testinput.txt', 'utf8').trim();
const input = fs.readFileSync('input.txt', 'utf8').trim();
const lines = input.split('\n');


// Define needed data
let joltage = 0;

// Figure out the answer
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


// Print the Solution
console.log(joltage);