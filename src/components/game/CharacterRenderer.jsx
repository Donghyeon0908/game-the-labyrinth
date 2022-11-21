import React, { useContext, useEffect } from "react";

import { styled } from "@stitches/react";

import {
  CHARACTER_SIZE,
  CHARACTER_SPRITE,
  CHARACTER_SPRITE_RIGHT,
  TILE_SIZE,
} from "../../constants/constants";
import useStore from "../../store/useStore";
import CanvasContext from "./CanvasContext";

function CharacterRenderer() {
  const ctx = useContext(CanvasContext);
  const { x, y, characterImg, setBufferCharacterImage, moveType } = useStore(
    (state) => ({
      characterImg: state.characterImg,
      x: state.x,
      y: state.y,
      setBufferCharacterImage: state.setBufferCharacterImage,
      moveType: state.moveType,
    })
  );

  useEffect(() => {
    if (characterImg) {
      if (moveType === "right") {
        ctx.drawImage(
          document.querySelector("#right-character"),
          x * TILE_SIZE,
          y * TILE_SIZE,
          CHARACTER_SIZE,
          CHARACTER_SIZE
        );
      } else {
        ctx.drawImage(
          document.querySelector(characterImg),
          x * TILE_SIZE,
          y * TILE_SIZE,
          CHARACTER_SIZE,
          CHARACTER_SIZE
        );
      }
    }
  }, [ctx, characterImg, x, y, moveType]);

  return (
    <>
      <ImageBuffer
        id="character"
        alt="character"
        onLoad={() => setBufferCharacterImage("#character")}
        src={CHARACTER_SPRITE}
      />
      <ImageBuffer
        id="right-character"
        alt="right-character"
        src={CHARACTER_SPRITE_RIGHT}
      />
    </>
  );
}

const ImageBuffer = styled("img", {
  display: "none",
});

export default CharacterRenderer;
