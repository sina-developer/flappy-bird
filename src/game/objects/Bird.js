import { CONSTS } from '../../consts/Consts';
import { drawSprite } from '../../utils/SpriteHandler';
import ObjectModel from './ObjectModel';

class Bird extends ObjectModel {
  constructor(context2D, sprite) {
    super(context2D, sprite);
    this.frames = [
      [
        CONSTS.BIRD.FRAME_1.POS_X,
        CONSTS.BIRD.FRAME_1.POS_Y,
        CONSTS.BIRD.FRAME_1.ORIGINAL_WIDTH,
        CONSTS.BIRD.FRAME_1.ORIGINAL_HEIGHT,
      ],
      [
        CONSTS.BIRD.FRAME_2.POS_X,
        CONSTS.BIRD.FRAME_2.POS_Y,
        CONSTS.BIRD.FRAME_2.ORIGINAL_WIDTH,
        CONSTS.BIRD.FRAME_2.ORIGINAL_HEIGHT,
      ],
    ];
    this.current_frame = 0;
    this.animationTimeCounter = 0;
  }

  start() {}

  update(deltaTime) {
    this.animateSprite(deltaTime);
    drawSprite(
      this.context2D,
      this.sprite,
      ...this.frames[this.current_frame],
      CONSTS.FRAME_WIDTH / 2 - CONSTS.BIRD_WIDTH / 2,
      200,
      CONSTS.BIRD_WIDTH,
      CONSTS.BIRD_HEIGHT
    );
  }

  animateSprite(deltaTime) {
    this.animationTimeCounter += deltaTime;
    if (this.animationTimeCounter > 100) {
      this.current_frame = (this.current_frame + 1) % this.frames.length;
      this.animationTimeCounter = 0;
    }
  }
}

export default Bird;
