import { useContext, useEffect } from "react";

import useStore from "../../store/useStore";
import CanvasContext from "./CanvasContext";
import { MAP_SIZE, TILE_SIZE } from "../../constants/constants";

function GameMapRenderer() {
  const ctx = useContext(CanvasContext);
  const { setIsMap, mapData, shortestPath, moveCount, isHint } = useStore(
    (state) => ({
      setIsMap: state.setIsMap,
      mapData: state.mapData,
      shortestPath: state.shortestPath,
      moveCount: state.moveCount,
      isHint: state.isHint,
    })
  );

  const { COLS, ROWS } = MAP_SIZE;
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

    const drawHintLayer = () => {
      const x = shortestPath[moveCount + 1][1] * TILE_SIZE;
      const y = shortestPath[moveCount + 1][0] * TILE_SIZE;
      ctx.drawImage(
        document.querySelector(`#map-tile-5`),
        0,
        0,
        TILE_SIZE,
        TILE_SIZE,
        x,
        y,
        TILE_SIZE,
        TILE_SIZE
      );
    };

    drawLayer(mapData);

    if (isHint) {
      drawHintLayer();
    }

    setIsMap(true);
  }, [COLS, ROWS, ctx, setIsMap, mapData, shortestPath, moveCount, isHint]);

  return null;
}

export default GameMapRenderer;
