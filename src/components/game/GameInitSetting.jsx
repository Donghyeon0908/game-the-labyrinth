import { useEffect } from "react";

import useStore from "../../store/useStore";
import Graph from "../../utils/Graph";
import getPosition from "../../utils/position";
import AStar from "../../utils/AStar";
import { START_TILE, END_TILE } from "../../constants/constants";
import getMapData from "../../utils/randomMap";

function GameInitSetting() {
  const mapData = getMapData();
  const setMapData = useStore((state) => state.setMapData);
  const setShortestPath = useStore((state) => state.setShortestPath);
  const setStaringPosition = useStore((state) => state.setStaringPosition);
  const graph = new Graph(mapData);
  const start = getPosition(mapData, START_TILE);
  const end = getPosition(mapData, END_TILE);
  const shortestPath = AStar(
    graph,
    graph.grid[start[0]][start[1]],
    graph.grid[end[0]][end[1]]
  );

  useEffect(() => {
    setShortestPath([start, ...shortestPath]);
  }, [setShortestPath, shortestPath, start]);

  useEffect(() => {
    setStaringPosition(start);
  }, [setStaringPosition, start]);

  useEffect(() => {
    setMapData(mapData);
  }, [mapData, setMapData]);

  return null;
}

export default GameInitSetting;
