import { Scene, Math as pMath } from "phaser";

const { Vector2 } = pMath;
export default class MainScene extends Scene {
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
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
      [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 1, 0, 0, 1, 1, 3],
    ];

    const map = this.make.tilemap({
      data: mapDataArray,
      tileHeight: 64,
      tileWidth: 64,
    });
    map.addTilesetImage("tiles");

    const startingPoint = map.findTile((tile) => tile.index === 3);
    const layer = map.createLayer(0, "tiles", 0, 0);

    this.player = this.physics.add.sprite(
      startingPoint.pixelX + 30,
      startingPoint.pixelY + 30,
      "player"
    );

    this.physics.add.collider(this.player, layer);
    this.player.setCollideWorldBounds(true);

    layer.setCollision(0);

    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("player", {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    // this.target = new Vector2();
    // this.input.on("pointerup", (pointer) => {
    //   const { worldX, worldY } = pointer;

    //   this.target.x = worldX;
    //   this.target.y = worldY;
    // });
  }

  update() {
    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
      this.player.setAccelerationX(0);
      this.player.play("walk", true);
    } else if (this.cursors.down.isDown) {
      this.player.setAccelerationY(160);
      this.player.setAccelerationX(0);
      this.player.play("walk", true);
    } else if (this.cursors.right.isDown) {
      this.player.setAccelerationX(160);
      this.player.setAccelerationY(0);
      this.player.play("walk", true);
    } else if (this.cursors.left.isDown) {
      this.player.setAccelerationX(-160);
      this.player.setAccelerationY(0);
      this.player.play("walk", true);
    } else {
      this.player.setVelocityY(0);
      this.player.setVelocityX(0);
      this.player.play("walk", false);
    }

    // if (this.player.body.speed > 0) {
    //   const mousePoint = pMath.Distance.Between(
    //     this.player.x,
    //     this.player.y,
    //     this.target.x,
    //     this.target.y
    //   );
    //   if (mousePoint < 4) {
    //     this.player.body.reset(this.target.x, this.target.y);
    //   }
    // }
  }
}
