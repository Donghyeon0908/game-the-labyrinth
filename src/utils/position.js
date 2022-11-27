import { MAP_SIZE } from "../constants/constants";

const getStartingEndPoint = (mapData) => {
  const startingPoint = [];
  const endPoint = [];

  for (let i = 0; i < MAP_SIZE.ROWS; i += 1) {
    for (let j = 0; j < MAP_SIZE.COLS; j += 1) {
      if (mapData[i][j] === 2) {
        endPoint.push(i, j);
      }
      if (mapData[i][j] === 3) {
        startingPoint.push(i, j);
      }
    }
  }

  return [startingPoint, endPoint];
};

export default getStartingEndPoint;
