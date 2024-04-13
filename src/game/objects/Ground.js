import { CONSTS } from '../../consts/Consts';
import { drawSprite } from '../../utils/SpriteHandler';
import BoxCollider from '../colliders/boxCollider';
import ObjectModel from './ObjectModel';

class Ground extends ObjectModel {
  constructor(engine, context2D, sprite) {
    super(engine, context2D, sprite);
    this.pos_x = 0;
    this.y = CONSTS.FRAME_HEIGHT - CONSTS.GROUND.HEIGHT;
    this.name = CONSTS.GROUND.NAME;
  }

  start() {}

  getColliders() {
    return [
      new BoxCollider(
        this,
        0,
        this.y,
        CONSTS.FRAME_WIDTH,
        CONSTS.GROUND.HEIGHT
      ),
    ];
  }

  update(deltaTime) {
    if (this.pos_x >= CONSTS.GROUND.WIDTH - CONSTS.FRAME_WIDTH) {
      this.pos_x = 0;
    } else {
      this.pos_x += deltaTime / CONSTS.GROUND.RESISTANCE;
    }
    drawSprite(
      this.context2D,
      this.sprite,
      CONSTS.GROUND.POS_X,
      CONSTS.GROUND.POS_Y,
      CONSTS.GROUND.ORIGINAL_WIDTH,
      CONSTS.GROUND.ORIGINAL_HEIGHT,
      -this.pos_x,
      this.y,
      CONSTS.GROUND.WIDTH,
      CONSTS.GROUND.HEIGHT
    );
  }
}

export default Ground;
