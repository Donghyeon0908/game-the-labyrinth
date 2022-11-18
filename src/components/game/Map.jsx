import { useContext, useEffect } from "react";

import useStore from "../../store/useStore";
import CanvasContext from "./CanvasContext";
import { LAYERS, MAP_SIZE, TILE_SIZE } from "../../constants/constants";

function Map() {
  const ctx = useContext(CanvasContext);
  const { loadMap } = useStore((state) => ({
    loadMap: state.loadMap,
  }));
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

    drawLayer(LAYERS[0]);
    loadMap(true);
  }, [COLS, ROWS, ctx, loadMap]);

  return null;
}

export default Map;
