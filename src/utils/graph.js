function GraphNode(x, y, type) {
  this.data = {};
  this.x = x;
  this.y = y;
  this.pos = { x, y };
  this.type = type;
}

export default function Graph(grid) {
  this.elements = grid;
  const nodes = [];

  let row = grid.length;
  let rowLength = grid.length;
  for (let x = 0; x < grid.length; x += 1) {
    row = grid[x];
    rowLength = row.length;
    nodes[x] = new Array(rowLength); // optimum array with size
    for (let y = 0; y < rowLength; y += 1) {
      nodes[x][y] = new GraphNode(x, y, row[y]);
    }
  }
  this.nodes = nodes;
}
