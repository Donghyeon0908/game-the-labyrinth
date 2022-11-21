import React, { useCallback, useEffect, useRef, useState } from "react";

import useStore from "../../store/useStore";
import { MAP_SIZE, TILE_SIZE, KEYBOARD_MOVE } from "../../constants/constants";
import checkMapCollision from "../../utils/collision";
import CanvasContext from "./CanvasContext";
import { getMoveType } from "../../utils/utils";

function GameContext({ children }) {
  const {
    characterX,
    characterY,
    move,
    mapData,
    getCharacterMoveType,
    isSuccess,
    startingPoint,
    setIsSuccess,
    setStaringPosition,
    setMoveCount,
  } = useStore((state) => ({
    move: state.move,
    characterX: state.x,
    characterY: state.y,
    mapData: state.mapData,
    getCharacterMoveType: state.getCharacterMoveType,
    isSuccess: state.isSuccess,
    startingPoint: state.startingPoint,
    setIsSuccess: state.setIsSuccess,
    setStaringPosition: state.setStaringPosition,
    setMoveCount: state.setMoveCount,
  }));
  const canvasRef = useRef(null);
  const ref = useRef();
  const [ctx, setCtx] = useState(null);
  const [isRender, setIsRender] = useState(true);
  const [isUpdateRequired, setIsUpdateRequired] = useState(false);
  const width = MAP_SIZE.COLS * TILE_SIZE;
  const height = MAP_SIZE.ROWS * TILE_SIZE;

  const moveCharacter = useCallback(
    (event) => {
      const { key } = event;
      if (KEYBOARD_MOVE[key] && isSuccess) {
        getCharacterMoveType(getMoveType(key));
        const [x, y] = KEYBOARD_MOVE[key];
        if (!checkMapCollision(characterX + x, characterY + y, mapData)) {
          setIsUpdateRequired(true);
          setIsRender(false);
          move([x, y]);
        }
      }

      if (!isSuccess) {
        setMoveCount(0);
        setIsSuccess(true);
        setIsUpdateRequired(true);
        setIsRender(false);
        setStaringPosition(startingPoint);
      }
    },
    [
      move,
      characterX,
      characterY,
      mapData,
      getCharacterMoveType,
      isSuccess,
      startingPoint,
      setIsSuccess,
      setStaringPosition,
      setMoveCount,
    ]
  );

  const tick = useCallback(() => {
    if (isUpdateRequired) {
      setIsRender(true);
      setIsUpdateRequired(false);
    }
    ref.current = requestAnimationFrame(tick);
  }, [isUpdateRequired, setIsRender, setIsUpdateRequired]);

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
      {isRender && children}
    </CanvasContext.Provider>
  );
}

export default GameContext;
