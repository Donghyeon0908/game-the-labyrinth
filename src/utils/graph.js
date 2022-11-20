function Node(x, y, type) {
  this.x = x;
  this.y = y;
  this.type = type;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.isVisited = false;
  this.isClosed = false;
  this.parent = null;
  this.position = [x, y];
}

export default function Graph(grid) {
  const nodes = [];
  let row;

  for (let x = 0; x < grid.length; x += 1) {
    row = grid[x];
    nodes[x] = new Array(row.length); // optimum array with size
    for (let y = 0; y < row.length; y += 1) {
      nodes[x][y] = new Node(x, y, row[y]);
    }
  }

  this.nodes = nodes;
}
