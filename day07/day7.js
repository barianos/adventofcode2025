// Prepare input
const fs = require('fs');
// const input = fs.readFileSync('testinput.txt', 'utf8').trim();
const input = fs.readFileSync('input.txt', 'utf8').trim();
const grid = input.split(/\r?\n/).map(line => line.split(''));

// Define needed data
let solution1=0;
let solution2=0;
let entryPointX = 0;
let entryPointY = 0;
let points =[];
const visited = new Set();

// Figure out the answer for part 1
locateEntryPoint(grid);
followLine(entryPointX +1,entryPointY);
const uniqueStrings = new Set(points.map(point => JSON.stringify(point)));
const uniquePoints = Array.from(uniqueStrings).map(str => JSON.parse(str));
solution1 = uniquePoints.length;


// Figure out the answer for part 2


// Print the Solution
console.log({solution1, solution2});


//Helper Functions
function key(x, y) {
    return `${x},${y}`;
}

function followLine(x, y) {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return;

    if (visited.has(key(x,y))) return;
    visited.add(key(x,y));

    if (grid[x][y] === '^') 
    {
        points.push([x, y]);
        followLine(x + 1, y - 1);
        followLine(x + 1, y + 1);
    } 
    else 
    {
        followLine(x + 1, y);
    }
}


function locateEntryPoint(){
    for (let i=0; i< grid.length; i++){
        for(let j=0; j < grid[0].length; j++){
            if(grid[i][j] === 'S'){
                entryPointX = i;
                entryPointY= j;
                return;
            }
        }
    }
}