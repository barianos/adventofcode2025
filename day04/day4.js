// Prepare input
const fs = require('fs');
// const input = fs.readFileSync('testinput.txt', 'utf8').trim();
const input = fs.readFileSync('input.txt', 'utf8').trim();
const lines = input.split('\n');


// Define needed data
let grid = input.split(/\r?\n/).map(row => row.split(""));
let solution1=0;
let solution2=0;
let passes=0;
let isPassPossible =true;
const adj = [
  [-1,-1], [-1,0], [-1,1],
  [0,-1],          [0,1],
  [1,-1],  [1,0],  [1,1]
];
// Figure out the answer for part 1

// Figure out the answer for part 2
while(isPassPossible){
    passes ++;
    let preState = grid.map(row => row.slice());
    singlePass();
    console.log(grid);
    grid = grid.map(row =>
        row.map(char => char === 'x' ? '.' : char)
    );

    console.log(grid);
    isPassPossible = !gridsEqual(preState, grid);
    console.log({passes});
}
function singlePass(){
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {

            if (grid[i][j] !== "@") continue;

            let count = 0;

            for (const [ai, aj] of adj) {
                const ni = i + ai;
                const nj = j + aj;
                if (ni < 0 || ni >= grid.length) continue;
                if (nj < 0 || nj >= grid[0].length) continue;

                if (grid[ni][nj] === "@" || grid[ni][nj] === 'x') count++;
            }

            if (count < 4){
                solution2++;
                grid[i][j] = 'x';
                
            }
        }
    }
}

function gridsEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i].length !== b[i].length) return false;
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] !== b[i][j]) return false;
        }
    }
    return true;
}



// Print the Solution
console.log({passes, solution2});