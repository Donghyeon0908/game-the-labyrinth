import React, { useContext, useEffect } from "react";

import useStore from "../../store/useStore";
import CanvasContext from "./CanvasContext";
import { MAP_SIZE, MAP_TILES, TILE_SIZE } from "../../constants/constants";
import Grid from "./Grid";
import GameMapRenderer from "./GameMapRenderer";
import ImagesBuffer from "./ImagesBuffer";
import CharacterRenderer from "./CharacterRenderer";

function GameView() {
  const width = MAP_SIZE.COLS * TILE_SIZE;
  const height = MAP_SIZE.ROWS * TILE_SIZE;
  const ctx = useContext(CanvasContext);
  const { tilesImageData, isMap } = useStore((state) => ({
    tilesImageData: state.tilesImageData,
    isMap: state.isMap,
  }));

  useEffect(() => {
    return () => !!ctx && ctx.clearRect(0, 0, ctx.width, ctx.height);
  }, [ctx]);

  return (
    <>
      <ImagesBuffer />
      {Object.keys(tilesImageData).length === Object.keys(MAP_TILES).length && (
        <Grid width={width} height={height}>
          <GameMapRenderer />
        </Grid>
      )}
      {isMap && <CharacterRenderer />}
    </>
  );
}

export default GameView;