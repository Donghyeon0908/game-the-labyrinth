import BinaryHeap from "./Heap";

const getManhattanDistance = (from, to) => {
  return Math.abs(from.x - to.x) + Math.abs(from.y - to.y);
};

const getNeighbors = (grid, node) => {
  const neighbors = [];
  const { x, y } = node;

  if (grid[x - 1] && grid[x - 1][y]) {
    neighbors.push(grid[x - 1][y]);
  }
  if (grid[x + 1] && grid[x + 1][y]) {
    neighbors.push(grid[x + 1][y]);
  }
  if (grid[x][y - 1] && grid[x][y - 1]) {
    neighbors.push(grid[x][y - 1]);
  }
  if (grid[x][y + 1] && grid[x][y + 1]) {
    neighbors.push(grid[x][y + 1]);
  }

  return neighbors;
};

const getPath = (node) => {
  const result = [];
  let cur = node;

  while (cur.parent) {
    result.push([cur.x, cur.y]);
    cur = cur.parent;
  }

  return result.reverse();
};

const AStar = (graph, start, end) => {
  const openHeap = new BinaryHeap();
  start.h = getManhattanDistance(start, end);
  graph.markDirty(start);
  openHeap.push(start);

  while (openHeap.size() > 0) {
    const currentNode = openHeap.pop();

    if (currentNode === end) {
      return getPath(currentNode);
    }

    currentNode.isClosed = true;

    const neighbors = getNeighbors(graph.grid, currentNode);

    for (const neighbor of neighbors) {
      if (!neighbor.isClosed && !neighbor.isWall()) {
        const gScore = currentNode.g + 1;
        const hasBeenVisited = neighbor.isVisited;

        if (!hasBeenVisited || gScore < neighbor.g) {
          neighbor.isVisited = true;
          neighbor.parent = currentNode;
          neighbor.h = neighbor.h || getManhattanDistance(neighbor, end);
          neighbor.g = gScore;
          neighbor.f = neighbor.g + neighbor.h;
          graph.markDirty(neighbor);

          hasBeenVisited
            ? openHeap.rescoreElement(neighbor)
            : openHeap.push(neighbor);
        }
      }
    }
  }

  return [];
};

export default AStar;
