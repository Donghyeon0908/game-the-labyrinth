import React, { useContext, useEffect, useRef } from "react";

import { styled } from "@stitches/react";

import {
  CHARACTER_SIZE,
  CHARACTER_SPRITE,
  TILE_SIZE,
} from "../../constants/constants";
import useStore from "../../store/useStore";
import CanvasContext from "./CanvasContext";

function Character() {
  const ctx = useContext(CanvasContext);
  const characterRef = useRef(null);
  const { x, y, heroImg, loadCharacter, setBufferCharacterImage } = useStore(
    (state) => ({
      heroImg: state.heroImg,
      loadCharacter: state.loadCharacter,
      x: state.x,
      y: state.y,
      setBufferCharacterImage: state.setBufferCharacterImage,
    })
  );
  useEffect(() => {
    if (heroImg) {
      ctx.drawImage(
        document.querySelector(heroImg),
        x * TILE_SIZE,
        y * TILE_SIZE,
        CHARACTER_SIZE,
        CHARACTER_SIZE
      );
      loadCharacter(true);
    }
  }, [ctx, heroImg, x, y, loadCharacter]);

  return (
    <ImageBuffer
      id="character"
      alt="character"
      ref={characterRef}
      onLoad={() => setBufferCharacterImage(`#${characterRef.current.id}`)}
      className="images-buffer"
      src={CHARACTER_SPRITE}
    />
  );
}

const ImageBuffer = styled("img", {
  display: "none",
});

export default Character;
