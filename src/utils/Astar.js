import { OBSTACLE_TILE } from "../constants/constants";

const getManhattanDistance = (pos0, pos1) => {
  return Math.abs(pos1.x - pos0.x) + Math.abs(pos1.y - pos0.y);
};

const getGridInit = (grid) => {
  for (let x = 0; x < grid.length; x += 1) {
    for (let y = 0; y < grid[x].length; y += 1) {
      grid[x][y].f = 0;
      grid[x][y].g = 0;
      grid[x][y].h = 0;
      grid[x][y].visited = false;
      grid[x][y].closed = false;
      grid[x][y].parent = null;
    }
  }
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
  getGridInit(grid);
  const openList = [];
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
      const ret = [];
      while (cur.parent) {
        ret.push(cur);
        cur = cur.parent;
      }
      return ret.reverse();
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
          neighbor.h = getManhattanDistance(neighbor.pos, end.pos);
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
