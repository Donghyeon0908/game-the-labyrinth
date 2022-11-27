import { OBSTACLE_TILE } from "../constants/constants";

class Node {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.isVisited = false;
    this.isClosed = false;
    this.parent = null;
  }

  isWall() {
    return this.type === OBSTACLE_TILE;
  }
}

export default Node;
