import Phaser from "phaser";
import MainScene from "./mainScene";

const config = {
  type: Phaser.AUTO,
  width: 320,
  height: 320,
  pixelArt: true,
  parent: "container",
  scene: [MainScene],
};

export default config;
