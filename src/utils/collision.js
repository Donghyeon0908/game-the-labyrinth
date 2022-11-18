import { LAYERS, MAP_SIZE, SOLID_TILE } from "../constants/constants";

export const isSolidTile = (x, y) => {
  for (const layer of LAYERS) {
    if (SOLID_TILE === layer[y][x]) {
      return true;
    }
  }
  return false;
};

export const isMapEdge = (x, y) => {
  const { ROWS, COLS } = MAP_SIZE;
  return x < 0 || x >= COLS || y < 0 || y >= ROWS;
};

export const checkMapCollision = (x, y) => {
  return isMapEdge(x, y) || isSolidTile(x, y);
};
