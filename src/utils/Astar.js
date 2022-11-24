import { OBSTACLE_TILE } from "../constants/constants";

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

const AStar = (grid, start, end) => {
  const openList = [start];
  const result = [];

  while (openList.length > 0) {
    let lowIdx = 0;

    for (let i = 0; i < openList.length; i += 1) {
      if (openList[i].f < openList[lowIdx].f) {
        lowIdx = i;
      }
    }

    const currentNode = openList[lowIdx];

    if (currentNode === end) {
      let cur = currentNode;

      while (cur.parent) {
        result.push(cur.position);
        cur = cur.parent;
      }

      return result.reverse();
    }

    openList.splice(lowIdx, 1);
    currentNode.isClosed = true;

    const neighbors = getNeighbors(grid, currentNode);

    for (let i = 0; i < neighbors.length; i += 1) {
      const neighbor = neighbors[i];

      if (!neighbor.isClosed && neighbor.type !== OBSTACLE_TILE) {
        const gScore = currentNode.g + 1;
        let isBestScore = false;

        if (!neighbor.visited) {
          isBestScore = true;
          neighbor.h = getManhattanDistance(neighbor, end);
          neighbor.isVisited = true;
          openList.push(neighbor);
        } else if (gScore < neighbor.g) {
          isBestScore = true;
        }

        if (isBestScore) {
          neighbor.parent = currentNode;
          neighbor.g = gScore;
          neighbor.f = neighbor.g + neighbor.h;
        }
      }
    }
  }

  return [];
};

export default AStar;
