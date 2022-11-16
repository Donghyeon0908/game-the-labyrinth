import Phaser from "phaser";
import MainScene from "./mainScene";

const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 640,
  pixelArt: true,
  parent: "container",
  scene: [MainScene],
};

export default config;
