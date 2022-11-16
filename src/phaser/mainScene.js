import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.image("tiles", "assets/images/tiles.png");
    this.load.spritesheet("player", "assets/images/player.png", {
      frameWidth: 50,
      frameHeight: 50,
    });
  }

  create() {
    const mapDataArray = [
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
      data: mapDataArray,
      tileHeight: 64,
      tileWidth: 64,
    });
    map.addTilesetImage("tiles");

    const layer = map.createLayer(0, "tiles", 0, 0);

    this.player = this.physics.add.sprite(50, 50, "player");
  }
}
