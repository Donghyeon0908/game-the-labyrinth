import { RANDOM_TILES } from "../constants/constants";
import AStar from "./Astar";
import Graph from "./graph";
import { getStartingEndPoint } from "./utils";

const getMapData = (mapData) => {
  const newMap = mapData.map((array) => {
    return array.map((indx) => {
      return indx === 2 || indx === 3
        ? indx
        : RANDOM_TILES[Math.round(Math.random())];
    });
  });
  const graph = new Graph(newMap);
  const [start, end] = getStartingEndPoint(mapData);

  const path = AStar(
    graph.nodes,
    graph.nodes[start[0]][start[1]],
    graph.nodes[end[0]][end[1]]
  );

  return path.length ? newMap : getMapData(mapData);
};

export default getMapData;
