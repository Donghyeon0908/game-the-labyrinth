import React, { useCallback, useEffect, useRef, useState } from "react";

import useStore from "../../store/useStore";
import { MAP_SIZE, TILE_SIZE, KEYBOARD_MOVE } from "../../constants/constants";
import { checkMapCollision } from "../../utils/collision";
import CanvasContext from "./CanvasContext";

function GameContext({ children }) {
  const { characterX, characterY, move, mapData } = useStore((state) => ({
    move: state.move,
    characterX: state.x,
    characterY: state.y,
    mapData: state.mapData,
  }));
  const canvasRef = useRef(null);
  const ref = useRef();
  const [ctx, setCtx] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isUpdateRequired, setIsUpdateRequired] = useState(false);
  const width = MAP_SIZE.COLS * TILE_SIZE;
  const height = MAP_SIZE.ROWS * TILE_SIZE;

  const moveCharacter = useCallback(
    (event) => {
      const { key } = event;
      if (KEYBOARD_MOVE[key]) {
        const [x, y] = KEYBOARD_MOVE[key];
        if (!checkMapCollision(characterX + x, characterY + y, mapData)) {
          setIsUpdateRequired(true);
          setIsVisible(false);
          move([x, y]);
        }
      }
    },
    [move, characterX, characterY, mapData]
  );

  const tick = useCallback(() => {
    if (isUpdateRequired) {
      setIsVisible(true);
      setIsUpdateRequired(false);
    }
  }, [isUpdateRequired, setIsVisible, setIsUpdateRequired]);

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [setCtx]);

  useEffect(() => {
    ref.current = requestAnimationFrame(tick);
    return () => {
      ref.current && cancelAnimationFrame(ref.current);
    };
  }, [ref, tick]);

  useEffect(() => {
    document.addEventListener("keypress", moveCharacter);
    return () => {
      document.removeEventListener("keypress", moveCharacter);
    };
  }, [moveCharacter]);
  return (
    <CanvasContext.Provider value={ctx}>
      <canvas ref={canvasRef} width={width} height={height} />
      {isVisible && children}
    </CanvasContext.Provider>
  );
}

export default GameContext;
