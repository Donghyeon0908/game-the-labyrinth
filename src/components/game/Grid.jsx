import { useEffect, useContext } from "react";

import { TILE_SIZE } from "../../constants/constants";
import CanvasContext from "./CanvasContext";

function Grid({ width, height, children }) {
  const ctx = useContext(CanvasContext);

  useEffect(() => {
    for (let i = 0; i < width; i += 1) {
      const y = i * TILE_SIZE;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    for (let j = 0; j < height; j += 1) {
      const x = j * TILE_SIZE;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
  }, [ctx, height, width]);

  return children;
}

export default Grid;
