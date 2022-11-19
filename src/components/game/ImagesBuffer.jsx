import React from "react";

import { styled } from "@stitches/react";

import useStore from "../../store/useStore";
import { MAP_TILES } from "../../constants/constants";

function ImagesBuffer() {
  const { setBufferImage } = useStore((state) => ({
    setBufferImage: state.setBufferImage,
  }));
  return (
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
  );
}

const ImageBuffer = styled("div", {
  display: "none",
});

export default ImagesBuffer;
