export const BUTTON_NAME = {
  GUIDE: "Game Guide",
  START: "Game Start",
  BACK: "처음화면으로",
};

export const TILE_SIZE = 64;

export const MAP_SIZE = {
  COLS: 15,
  ROWS: 10,
};

export const MAP_TILES = {
  1: "assets/images/1.png",
  2: "assets/images/2.png",
  3: "assets/images/3.png",
  4: "assets/images/4.png",
  5: "assets/images/5.png",
};

export const KEYBOARD_MOVE = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
  ㅈ: [0, -1],
  ㅁ: [-1, 0],
  ㄴ: [0, 1],
  ㅇ: [1, 0],
};

export const OBSTACLE_TILE = 4;

export const CHARACTER_SPRITE = {
  DEFAULT: "assets/images/defaultPlayer.png",
  RIGHT: "assets/images/rightmove-1.png",
  DIE: "assets/images/die-5.png",
};

export const CHARACTER_SPRITE_DIE = {
  MOVE1: "assets/images/die-1.png",
  MOVE2: "assets/images/die-2.png",
  MOVE3: "assets/images/die-3.png",
  MOVE4: "assets/images/die-4.png",
  MOVE5: "assets/images/die-5.png",
};

export const CHARACTER_SIZE = 50;

export const RANDOM_TILES = [1, 4];

export const DEFAULT_MAPDATA = [
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1],
  [1, 4, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1],
  [1, 4, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1],
  [1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1],
  [1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 3],
];
