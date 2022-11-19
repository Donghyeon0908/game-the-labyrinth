import { useContext, useEffect } from "react";

import useStore from "../../store/useStore";
import CanvasContext from "./CanvasContext";
import { MAP_SIZE, TILE_SIZE } from "../../constants/constants";
import Graph from "../../utils/graph";
import AStar from "../../utils/AStar";
import getStartingEndPoint from "../../utils/serve";

function Map() {
  const ctx = useContext(CanvasContext);
  const { setIsMap, mapData } = useStore((state) => ({
    setIsMap: state.setIsMap,
    mapData: state.mapData,
  }));
  const { COLS, ROWS } = MAP_SIZE;
  const map = new Graph(mapData);
  const [start, end] = getStartingEndPoint(mapData);
  console.log(
    AStar(map.nodes, map.nodes[start[0]][start[1]], map.nodes[end[0]][end[1]])
  );
  useEffect(() => {
    const drawLayer = (grid) => {
      for (let i = 0; i < ROWS; i += 1) {
        for (let j = 0; j < COLS; j += 1) {
          const item = grid[i][j];
          if (item) {
            const img = document.querySelector(`#map-tile-${item}`);
            const x = j * TILE_SIZE;
            const y = i * TILE_SIZE;
            ctx.drawImage(
              img,
              0,
              0,
              TILE_SIZE,
              TILE_SIZE,
              x,
              y,
              TILE_SIZE,
              TILE_SIZE
            );
          }
        }
      }
    };
    drawLayer(mapData);
    setIsMap(true);
  }, [COLS, ROWS, ctx, setIsMap, mapData]);

  return null;
}

export default Map;
