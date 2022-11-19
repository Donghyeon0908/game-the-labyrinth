import { MAP_SIZE, OBSTACLE_TILE } from "../constants/constants";

export const isObstacleTile = (x, y, mapData) => {
  return OBSTACLE_TILE === mapData[y][x];
};

export const isMapEdge = (x, y) => {
  const { ROWS, COLS } = MAP_SIZE;
  return x < 0 || x >= COLS || y < 0 || y >= ROWS;
};

export const checkMapCollision = (x, y, mapData) => {
  return isMapEdge(x, y) || isObstacleTile(x, y, mapData);
};
