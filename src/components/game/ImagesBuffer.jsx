import React from "react";

import { styled } from "@stitches/react";

import useStore from "../../store/useStore";
import { MAP_TILES, CHARACTER_SPRITE } from "../../constants/constants";

function ImagesBuffer() {
  const setBufferImage = useStore((state) => state.setBufferImage);

  return (
    <>
      <ImageBuffer>
        {Object.keys(MAP_TILES).map((key) => {
          return (
            <img
              key={`map-tile-${key}`}
              id={`map-tile-${key}`}
              src={`${MAP_TILES[key]}`}
              alt={`map-tile-${key}`}
              onLoad={() => {
                setBufferImage(MAP_TILES[key]);
              }}
            />
          );
        })}
      </ImageBuffer>
      <ImageBuffer>
        {Object.keys(CHARACTER_SPRITE).map((key) => {
          return (
            <img
              key={`character-sprite-${key}`}
              id={`character-sprite-${key}`}
              src={CHARACTER_SPRITE[key]}
              alt={`character-sprite-${key}`}
            />
          );
        })}
      </ImageBuffer>
    </>
  );
}

const ImageBuffer = styled("div", {
  display: "none",
});

export default ImagesBuffer;
