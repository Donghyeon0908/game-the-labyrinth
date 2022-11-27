import Node from "./Node";

class Graph {
  constructor(gridIn) {
    this.nodes = [];
    this.grid = [];
    this.dirtyNodes = [];

    for (let x = 0; x < gridIn.length; x += 1) {
      this.grid[x] = [];

      for (let y = 0; y < gridIn[x].length; y += 1) {
        const node = new Node(x, y, gridIn[x][y]);

        this.grid[x][y] = node;
        this.nodes.push(node);
      }
    }
  }

  markDirty(node) {
    this.dirtyNodes.push(node);
  }
}

export default Graph;
