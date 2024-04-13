import { CONSTS } from '../../consts/Consts';
import { drawSprite } from '../../utils/SpriteHandler';
import ObjectModel from './ObjectModel';

class Background extends ObjectModel {
  constructor(engine,context2D, sprite) {
    super(engine,context2D, sprite);
  }
  start() {}

  update() {
    drawSprite(
      this.context2D,
      this.sprite,
      0,
      0,
      CONSTS.BG_ORIGINAL_WIDTH,
      CONSTS.BG_ORIGINAL_HEIGHT,
      0,
      0,
      CONSTS.FRAME_WIDTH,
      CONSTS.FRAME_HEIGHT
    );
  }
}

export default Background;
