import Node from "./Node";

export default class Graph {
  constructor(gridIn) {
    this.nodes = [];
    this.grid = [];
    this.dirtyNodes = [];

    for (let x = 0; x < gridIn.length; x += 1) {
      this.grid[x] = [];

      for (let y = 0, row = gridIn[x]; y < row.length; y += 1) {
        const node = new Node(x, y, row[y]);

        this.grid[x][y] = node;
        this.nodes.push(node);
      }
    }
  }

  markDirty(node) {
    this.dirtyNodes.push(node);
  }
}
