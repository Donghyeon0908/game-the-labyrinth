import {
  RANDOM_TILES,
  MAP_SIZE,
  START_TILE,
  END_TILE,
} from "../constants/constants";
import AStar from "./AStar";
import Graph from "./Graph";
import getPosition from "./position";

const { COLS, ROWS } = MAP_SIZE;

const getMapData = () => {
  const mapData = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => RANDOM_TILES[Math.round(Math.random())])
  );
  mapData[0][Math.floor(Math.random() * COLS)] = END_TILE;
  mapData[ROWS - 1][Math.floor(Math.random() * COLS)] = START_TILE;

  const graph = new Graph(mapData);
  const start = getPosition(mapData, START_TILE);
  const end = getPosition(mapData, END_TILE);

  const path = AStar(
    graph,
    graph.grid[start[0]][start[1]],
    graph.grid[end[0]][end[1]]
  );

  return path.length >= 20 ? mapData : getMapData();
};

export default getMapData;
