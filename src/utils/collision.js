import { MAP_SIZE, SOLID_TILE } from "../constants/constants";

export const isSolidTile = (x, y, mapData) => {
  if (SOLID_TILE === mapData[y][x]) {
    return true;
  }

  return false;
};

export const isMapEdge = (x, y) => {
  const { ROWS, COLS } = MAP_SIZE;
  return x < 0 || x >= COLS || y < 0 || y >= ROWS;
};

export const checkMapCollision = (x, y, mapData) => {
  return isMapEdge(x, y) || isSolidTile(x, y, mapData);
};
