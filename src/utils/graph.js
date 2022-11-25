import { OBSTACLE_TILE } from "../constants/constants";

const cleanNode = (node) => {
  node.f = 0;
  node.g = 0;
  node.h = 0;
  node.isVisited = false;
  node.isClosed = false;
  node.parent = null;
};

function Node(x, y, type) {
  this.x = x;
  this.y = y;
  this.position = [x, y];
  this.weight = type;
}

Node.prototype.getCost = function (fromNeighbor) {
  if (fromNeighbor && fromNeighbor.x !== this.x && fromNeighbor.y !== this.y) {
    return this.weight * 1.41421;
  }

  return this.weight;
};

Node.prototype.isWall = function () {
  return this.weight === OBSTACLE_TILE;
};

export default function Graph(gridIn) {
  this.nodes = [];
  this.grid = [];

  for (let x = 0; x < gridIn.length; x += 1) {
    this.grid[x] = [];

    for (let y = 0, row = gridIn[x]; y < row.length; y += 1) {
      const node = new Node(x, y, row[y]);

      this.grid[x][y] = node;
      this.nodes.push(node);
    }
  }

  this.init();
}

Graph.prototype.init = function () {
  this.dirtyNodes = [];

  for (let i = 0; i < this.nodes.length; i += 1) {
    cleanNode(this.nodes[i]);
  }
};

Graph.prototype.markDirty = function (node) {
  this.dirtyNodes.push(node);
};
