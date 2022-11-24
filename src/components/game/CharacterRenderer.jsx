import { useContext, useEffect } from "react";

import { CHARACTER_SIZE, TILE_SIZE } from "../../constants/constants";
import useStore from "../../store/useStore";
import CanvasContext from "../canvas/CanvasContext";

function CharacterRenderer() {
  const ctx = useContext(CanvasContext);
  const x = useStore((state) => state.x);
  const y = useStore((state) => state.y);
  const moveType = useStore((state) => state.moveType);
  const isSuccess = useStore((state) => state.isSuccess);
  const isHint = useStore((state) => state.isHint);

  useEffect(() => {
    if (isSuccess && moveType === "right") {
      ctx.drawImage(
        document.querySelector("#character-sprite-RIGHT"),
        x * TILE_SIZE,
        y * TILE_SIZE,
        CHARACTER_SIZE,
        CHARACTER_SIZE
      );
    }

    if (isSuccess && moveType !== "right") {
      ctx.drawImage(
        document.querySelector("#character-sprite-DEFAULT"),
        x * TILE_SIZE,
        y * TILE_SIZE,
        CHARACTER_SIZE,
        CHARACTER_SIZE
      );
    }
    if (!isSuccess) {
      ctx.drawImage(
        document.querySelector("#character-sprite-DIE"),
        x * TILE_SIZE,
        y * TILE_SIZE,
        CHARACTER_SIZE,
        CHARACTER_SIZE
      );
    }
  }, [ctx, x, y, moveType, isSuccess, isHint]);

  return null;
}

export default CharacterRenderer;
