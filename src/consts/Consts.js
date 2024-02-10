export const CONSTS = {
  SPRITE_PATH: '/sprite.png',
  FPS: 60,
  FRAME_WIDTH: 400,
  FRAME_HEIGHT: 600,

  BG_ORIGINAL_WIDTH: 143,
  BG_ORIGINAL_HEIGHT: 256,

  BIRD: {
    FRAME_1: {
      ORIGINAL_WIDTH: 17,
      ORIGINAL_HEIGHT: 12,
      POS_X: 264,
      POS_Y: 64,
    },
    FRAME_2: {
      ORIGINAL_WIDTH: 17,
      ORIGINAL_HEIGHT: 12,
      POS_X: 264,
      POS_Y: 90,
    },
  },
  BIRD_WIDTH: 50,
  BIRD_HEIGHT: 35,

  GROUND: {
    ORIGINAL_WIDTH: 154,
    ORIGINAL_HEIGHT: 56,

    POS_X: 146,
    POS_Y: 0,

    HEIGHT: 150,
    WIDTH: 480,
    RESISTANCE: 10,
  },

  PIPES: {
    UP: {
      ORIGINAL_HEIGHT: 135,
      ORIGINAL_WIDTH: 26,

      POS_X: 302,
      POS_Y: 0,

      WIDTH: 75,
      HEIGHT: 394,
    },
    DOWN: {
      ORIGINAL_HEIGHT: 121,
      ORIGINAL_WIDTH: 26,

      POS_X: 330,
      POS_Y: 0,

      WIDTH: 75,
      HEIGHT: 352,
    },
    RESISTANCE: 10,
  },
};
