import { OBSTACLE_TILE } from "../constants/constants";

const getManhattanDistance = (from, to) => {
  return Math.abs(from.x - to.x) + Math.abs(from.y - to.y);
};

const getNeighbors = (grid, node) => {
  const ret = [];
  const { x, y } = node;
  if (grid[x - 1] && grid[x - 1][y]) {
    ret.push(grid[x - 1][y]);
  }
  if (grid[x + 1] && grid[x + 1][y]) {
    ret.push(grid[x + 1][y]);
  }
  if (grid[x][y - 1] && grid[x][y - 1]) {
    ret.push(grid[x][y - 1]);
  }
  if (grid[x][y + 1] && grid[x][y + 1]) {
    ret.push(grid[x][y + 1]);
  }
  return ret;
};

const AStar = (grid, start, end) => {
  const openList = [];
  const result = [];
  openList.push(start);
  while (openList.length > 0) {
    let lowInd = 0;
    for (let i = 0; i < openList.length; i += 1) {
      if (openList[i].f < openList[lowInd].f) {
        lowInd = i;
      }
    }
    const currentNode = openList[lowInd];

    if (currentNode === end) {
      let cur = currentNode;

      while (cur.parent) {
        result.push(cur);
        cur = cur.parent;
      }

      return result.reverse();
    }
    openList.splice(lowInd, 1);
    currentNode.closed = true;

    const neighbors = getNeighbors(grid, currentNode);

    for (let i = 0; i < neighbors.length; i += 1) {
      const neighbor = neighbors[i];

      if (!neighbor.closed && neighbor.type !== OBSTACLE_TILE) {
        const gScore = currentNode.g + 1;
        let gScoreIsBest = false;

        if (!neighbor.visited) {
          gScoreIsBest = true;
          neighbor.h = getManhattanDistance(neighbor, end);
          neighbor.visited = true;
          openList.push(neighbor);
        } else if (gScore < neighbor.g) {
          gScoreIsBest = true;
        }

        if (gScoreIsBest) {
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
