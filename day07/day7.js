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

// Figure out the answer for part 1
locateEntryPoint(grid);
followLine(entryPointX +1,entryPointY);
// console.log({points});
const uniqueStrings = new Set(points.map(point => JSON.stringify(point)));

// 2. Convert the Set of unique strings back into an array of strings.
// 3. Deserialize each string back into a JavaScript array using JSON.parse.
const uniquePoints = Array.from(uniqueStrings).map(str => JSON.parse(str));

// --- Output ---

console.log("Unique Points:", uniquePoints);
solution1 = uniquePoints.length;
// Figure out the answer for part 2


// Print the Solution
console.log({solution1, solution2});


//Helper Functions
function followLine(x,y){
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
        return;
    }

    if(grid[x][y] === '^'){
        // solution1++;
        if(!points.includes([x,y])){
            points.push([x,y]);
        }
        // console.log({x,y});
        followLine(x+1, y-1);
        followLine(x+1, y+1);
    }
    else
        followLine(x+1,y);
}


// function followLine(x,y){
//     for(let i= x+1; i< grid.length; i++){
//         if(grid[i][y] === '.'){
//             // console.log(grid[i]);
//             // console.log({i,y});
//             points.push([i,y]);
//         }else{
//             solution1 ++;
//             console.log('else');
//             followLine(i, y-1);
//             followLine(i, y+1);
//         }
//     }
// }

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