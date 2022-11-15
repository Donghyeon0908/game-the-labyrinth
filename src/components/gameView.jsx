import React, { useEffect } from "react";
import Phaser from "phaser";
import config from "../phaser/config";

function GameView() {
  useEffect(() => {
    const game = new Phaser.Game(config);
  }, []);

  return <div id="container"></div>;
}

export default GameView;
