import { CONSTS } from '../../consts/Consts';
import Random from '../../utils/Random';
import { drawSprite } from '../../utils/SpriteHandler';
import BoxCollider from '../colliders/boxCollider';
import ObjectModel from './ObjectModel';

class Pipe extends ObjectModel {
  constructor(context2D, sprite) {
    super(context2D, sprite);

    this.gap = 100;
  }

  start(x) {
    this.y =
      (CONSTS.FRAME_HEIGHT - CONSTS.GROUND.HEIGHT) / 2 + Random(-100, 100);

    this.x = x;
  }

  getColliders() {
    return [
      new BoxCollider(
        this,
        this.x,
        this.getTopY(),
        CONSTS.PIPES.UP.WIDTH,
        CONSTS.PIPES.UP.HEIGHT
      ),
      new BoxCollider(
        this,
        this.x,
        this.getBottomY(),
        CONSTS.PIPES.DOWN.WIDTH,
        CONSTS.PIPES.DOWN.HEIGHT
      ),
    ];
  }

  update(deltaTime) {
    this.x -= deltaTime / CONSTS.PIPES.RESISTANCE;

    drawSprite(
      this.context2D,
      this.sprite,
      CONSTS.PIPES.UP.POS_X,
      CONSTS.PIPES.UP.POS_Y,
      CONSTS.PIPES.UP.ORIGINAL_WIDTH,
      CONSTS.PIPES.UP.ORIGINAL_HEIGHT,
      this.x,
      this.getTopY(),
      CONSTS.PIPES.UP.WIDTH,
      CONSTS.PIPES.UP.HEIGHT
    );

    drawSprite(
      this.context2D,
      this.sprite,
      CONSTS.PIPES.DOWN.POS_X,
      CONSTS.PIPES.DOWN.POS_Y,
      CONSTS.PIPES.DOWN.ORIGINAL_WIDTH,
      CONSTS.PIPES.DOWN.ORIGINAL_HEIGHT,
      this.x,
      this.getBottomY(),
      CONSTS.PIPES.DOWN.WIDTH,
      CONSTS.PIPES.DOWN.HEIGHT
    );
  }

  getTopY() {
    return -(CONSTS.PIPES.UP.HEIGHT - this.y) - this.gap / 2;
  }

  getBottomY() {
    return this.y + this.gap / 2;
  }
}

export default Pipe;
