import {
  RANDOM_TILES,
  MAP_SIZE,
  DEFAULT_MAPDATA,
} from "../constants/constants";
import AStar from "./AStar";
import Graph from "./Graph";
import { getStartingEndPoint } from "./utils";

const { COLS, ROWS } = MAP_SIZE;

const getMapData = () => {
  const mapData = DEFAULT_MAPDATA.map((rows) => {
    return rows.map(() => {
      return RANDOM_TILES[Math.round(Math.random())];
    });
  });
  mapData[0][Math.floor(Math.random() * COLS)] = 2;
  mapData[ROWS - 1][Math.floor(Math.random() * COLS)] = 3;

  const graph = new Graph(mapData);
  const [start, end] = getStartingEndPoint(mapData);

  const path = AStar(
    graph,
    graph.grid[start[0]][start[1]],
    graph.grid[end[0]][end[1]]
  );

  return path.length >= 20 ? mapData : getMapData();
};

export default getMapData;
