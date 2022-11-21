import { useEffect, useMemo } from "react";

import useStore from "../../store/useStore";
import Graph from "../../utils/Graph";
import { getStartingEndPoint } from "../../utils/utils";
import AStar from "../../utils/AStar";
import getMapData from "../../utils/randomMap";

function GameInitSetting() {
  const mapData = getMapData();
  const setMapData = useStore((state) => state.setMapData);
  const setShortestPath = useStore((state) => state.setShortestPath);
  const setStaringPosition = useStore((state) => state.setStaringPosition);
  const graph = new Graph(mapData);
  const [start, end] = getStartingEndPoint(mapData);
  const shortestPath = AStar(
    graph.nodes,
    graph.nodes[start[0]][start[1]],
    graph.nodes[end[0]][end[1]]
  );

  const shortestPathPosition = useMemo(() => {
    return shortestPath.map((index) => index.position);
  }, [shortestPath]);

  useEffect(() => {
    setMapData(mapData);
  }, [mapData, setMapData]);

  useEffect(() => {
    setShortestPath([start, ...shortestPathPosition]);
  }, [setShortestPath, shortestPathPosition, start]);

  useEffect(() => {
    setStaringPosition(start);
  }, [setStaringPosition, start]);

  return null;
}

export default GameInitSetting;
