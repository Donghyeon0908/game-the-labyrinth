import { useEffect } from "react";

import useStore from "../../store/useStore";
import Graph from "../../utils/graph";
import { getStartingEndPoint } from "../../utils/utils";
import AStar from "../../utils/Astar";

function GameInitSetting() {
  const mapData = useStore((state) => state.mapData);
  const setShortestPath = useStore((state) => state.setShortestPath);
  const setStaringPosition = useStore((state) => state.setStaringPosition);
  const graph = new Graph(mapData);
  const [start, end] = getStartingEndPoint(mapData);
  const shortestPath = AStar(
    graph.nodes,
    graph.nodes[start[0]][start[1]],
    graph.nodes[end[0]][end[1]]
  );
  const shortestPathPosition = shortestPath.map((index) => index.position);

  useEffect(() => {
    setShortestPath([start, ...shortestPathPosition]);
  }, [setShortestPath, shortestPathPosition, start]);

  useEffect(() => {
    setStaringPosition(start);
  }, [setStaringPosition, start]);

  return null;
}

export default GameInitSetting;
