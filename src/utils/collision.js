import { MAP_SIZE, OBSTACLE_TILE } from "../constants/constants";

const isObstacleTile = (x, y, mapData) => {
  return OBSTACLE_TILE === mapData[y][x];
};

const isMapEdge = (x, y) => {
  return x < 0 || x >= MAP_SIZE.COLS || y < 0 || y >= MAP_SIZE.ROWS;
};

const checkMapCollision = (x, y, mapData) => {
  return isMapEdge(x, y) || isObstacleTile(x, y, mapData);
};

export default checkMapCollision;
