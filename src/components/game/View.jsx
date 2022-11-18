import React, { useContext, useEffect } from "react";

import useStore from "../../store/useStore";
import CanvasContext from "./CanvasContext";
import { MAP_SIZE, MAP_TILES, TILE_SIZE } from "../../constants/constants";
import Grid from "./Grid";
import Map from "./Map";
import ImagesBuffer from "./ImagesBuffer";
import Character from "./Character";

function View() {
  const width = MAP_SIZE.COLS * TILE_SIZE;
  const height = MAP_SIZE.ROWS * TILE_SIZE;
  const ctx = useContext(CanvasContext);

  const { imageData, mapLoaded } = useStore((state) => ({
    imageData: state.imageData,
    mapLoaded: state.mapLoaded,
  }));

  useEffect(() => {
    return () => !!ctx && ctx.clearRect(0, 0, ctx.width, ctx.height);
  }, [ctx]);

  return (
    <>
      <ImagesBuffer />
      {Object.keys(imageData).length === Object.keys(MAP_TILES).length && (
        <Grid width={width} height={height}>
          <Map />
        </Grid>
      )}
      {mapLoaded && <Character />}
    </>
  );
}

export default View;
