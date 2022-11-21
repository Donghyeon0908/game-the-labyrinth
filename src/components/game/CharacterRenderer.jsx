import React, { useCallback, useContext, useEffect, useState } from "react";

import { styled } from "@stitches/react";

import {
  CHARACTER_SIZE,
  CHARACTER_SPRITE,
  CHARACTER_SPRITE_RIGHT,
  CHARACTER_SPRITE_DIE,
  TILE_SIZE,
} from "../../constants/constants";
import useStore from "../../store/useStore";
import CanvasContext from "./CanvasContext";

function CharacterRenderer() {
  const ctx = useContext(CanvasContext);
  const { x, y, characterImg, setBufferCharacterImage, moveType, isSuccess } =
    useStore((state) => ({
      characterImg: state.characterImg,
      x: state.x,
      y: state.y,
      setBufferCharacterImage: state.setBufferCharacterImage,
      moveType: state.moveType,
      isSuccess: state.isSuccess,
    }));

  useEffect(() => {
    if (characterImg) {
      if (isSuccess && moveType === "right") {
        ctx.drawImage(
          document.querySelector("#right-character-1"),
          x * TILE_SIZE,
          y * TILE_SIZE,
          CHARACTER_SIZE,
          CHARACTER_SIZE
        );
      }

      if (isSuccess && moveType !== "right") {
        ctx.drawImage(
          document.querySelector("#left-character-1"),
          x * TILE_SIZE,
          y * TILE_SIZE,
          CHARACTER_SIZE,
          CHARACTER_SIZE
        );
      }
      if (!isSuccess) {
        ctx.drawImage(
          document.querySelector("#die-character-5"),
          x * TILE_SIZE,
          y * TILE_SIZE,
          CHARACTER_SIZE,
          CHARACTER_SIZE
        );
      }
    }
  }, [ctx, characterImg, x, y, moveType, isSuccess]);

  return (
    <>
      <ImageBuffer
        id="left-character-1"
        alt="left-character"
        onLoad={() => setBufferCharacterImage("#character")}
        src={CHARACTER_SPRITE}
      />
      <ImageBuffer
        id="right-character-1"
        alt="right-character"
        src={CHARACTER_SPRITE_RIGHT.MOVE1}
      />
      <ImageBuffer
        id="die-character-5"
        alt="die-character"
        src={CHARACTER_SPRITE_DIE.MOVE5}
      />
    </>
  );
}

const ImageBuffer = styled("img", {
  display: "none",
});

export default CharacterRenderer;
