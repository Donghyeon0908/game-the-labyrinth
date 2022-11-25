import { OBSTACLE_TILE } from "../constants/constants";

export default class Node {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.position = [x, y];
    this.weight = type;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.isVisited = false;
    this.isClosed = false;
    this.parent = null;
  }

  getCost(fromNeighbor) {
    if (fromNeighbor?.x !== this.x && fromNeighbor?.y !== this.y) {
      return this.weight * 1.41421;
    }

    return this.weight;
  }

  isWall() {
    return this.weight === OBSTACLE_TILE;
  }
}
