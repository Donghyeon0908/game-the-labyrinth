import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.image("tiles", "assets/images/tiles.png");
  }

  create() {
    const array = [
      [2, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 3],
    ];

    const map = this.make.tilemap({
      data: array,
      tileHeight: 64,
      tileWidth: 64,
    });
    map.addTilesetImage("tiles");

    const layer = map.createLayer(0, "tiles", 0, 0);
  }
}
