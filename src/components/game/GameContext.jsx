import React, { useCallback, useEffect, useRef, useState } from "react";

import useStore from "../../store/useStore";
import { MAP_SIZE, TILE_SIZE, KEYBOARD_MOVE } from "../../constants/constants";
import checkMapCollision from "../../utils/collision";
import CanvasContext from "../canvas/CanvasContext";
import getMoveType from "../../utils/moveType";
import useModal from "../../hooks/useModal";
import FailedMessage from "../messages/FailedMessage";

function GameContext({ children }) {
  const characterX = useStore((state) => state.x);
  const characterY = useStore((state) => state.y);
  const [FailMessageModal, handleModal] = useModal();
  const move = useStore((state) => state.move);
  const mapData = useStore((state) => state.mapData);
  const getCharacterMoveType = useStore((state) => state.getCharacterMoveType);
  const isSuccess = useStore((state) => state.isSuccess);
  const startingPoint = useStore((state) => state.startingPoint);
  const setIsSuccess = useStore((state) => state.setIsSuccess);
  const setStaringPosition = useStore((state) => state.setStaringPosition);
  const setMoveCount = useStore((state) => state.setMoveCount);
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
        handleModal();
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
      handleModal,
    ]
  );

  const step = useCallback(() => {
    if (isUpdateRequired) {
      setIsRender(true);
      setIsUpdateRequired(false);
    }

    ref.current = requestAnimationFrame(step);
  }, [isUpdateRequired, setIsRender, setIsUpdateRequired]);

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [setCtx]);

  useEffect(() => {
    ref.current = requestAnimationFrame(step);
    return () => {
      ref.current && cancelAnimationFrame(ref.current);
    };
  }, [ref, step]);

  useEffect(() => {
    document.addEventListener("keypress", moveCharacter);

    return () => {
      document.removeEventListener("keypress", moveCharacter);
    };
  }, [moveCharacter]);

  return (
    <CanvasContext.Provider value={ctx}>
      <FailMessageModal onClick={handleModal}>
        <FailedMessage />
      </FailMessageModal>
      <canvas ref={canvasRef} width={width} height={height} />
      {isRender && children}
    </CanvasContext.Provider>
  );
}

export default GameContext;
