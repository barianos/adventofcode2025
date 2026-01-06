// Prepare input
const fs = require('fs');
// const input = fs.readFileSync('testinput.txt', 'utf8').trim();
const input = fs.readFileSync('input.txt', 'utf8').trim();

// Parse junction boxes
const points = input.split(/\r?\n/).map(line => {
  const [x, y, z] = line.split(',').map(Number);
  return { x, y, z };
});

// Define needed data
let solution1 = 0;
let solution2 = 0;

// ---------- Union-Find ----------
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = Array(n).fill(1);
    this.components = n;
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(a, b) {
    a = this.find(a);
    b = this.find(b);
    if (a === b) return false;

    if (this.size[a] < this.size[b]) [a, b] = [b, a];
    this.parent[b] = a;
    this.size[a] += this.size[b];
    this.components--;
    return true;
  }
}

// ---------- Build all pairwise distances ----------
const edges = [];
const n = points.length;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const dx = points[i].x - points[j].x;
    const dy = points[i].y - points[j].y;
    const dz = points[i].z - points[j].z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    edges.push({ i, j, dist });
  }
}

// Sort by distance
edges.sort((a, b) => a.dist - b.dist);

// ---------- Part 1 ----------
const CONNECTIONS = points.length === 20 ? 10 : 1000;
const uf1 = new UnionFind(n);

for (let k = 0; k < CONNECTIONS; k++) {
  uf1.union(edges[k].i, edges[k].j);
}

// Compute circuit sizes
const circuitSizes = new Map();
for (let i = 0; i < n; i++) {
  const root = uf1.find(i);
  circuitSizes.set(root, (circuitSizes.get(root) || 0) + 1);
}

const sizes = [...circuitSizes.values()].sort((a, b) => b - a);
solution1 = sizes[0] * sizes[1] * sizes[2];

// ---------- Part 2 ----------
const uf2 = new UnionFind(n);

for (const edge of edges) {
  const merged = uf2.union(edge.i, edge.j);
  if (merged && uf2.components === 1) {
    solution2 = points[edge.i].x * points[edge.j].x;
    break;
  }
}

// Print the Solution
console.log({ solution1, solution2 });
