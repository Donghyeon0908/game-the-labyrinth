import React, { useEffect } from "react";

import Phaser from "phaser";
import { styled } from "@stitches/react";

import backgroundImage from "../assets/images/dungeon.png";
import config from "../phaser/config";

function GameView() {
  useEffect(() => {
    const game = new Phaser.Game(config);
  }, []);

  return <GameContainer id="container"></GameContainer>;
}

const GameContainer = styled("div", {
  display: "flex",
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  justifyContent: "center",
  alignItems: "center",
});

export default GameView;
