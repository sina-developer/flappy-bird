import { CONSTS } from '../../consts/Consts';
import { drawSprite } from '../../utils/SpriteHandler';
import BoxCollider from '../colliders/boxCollider';
import ObjectModel from './ObjectModel';

class Bird extends ObjectModel {
  constructor(engine, context2D, sprite) {
    super(engine, context2D, sprite);
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

    this.x = CONSTS.FRAME_WIDTH / 2 - CONSTS.BIRD_WIDTH / 2;
    this.y = 100;

    this.speed = 0;
    this.gravity = 0.3;
    this.jumpStrength = -4;
    this.is_dead = false;
  }

  start() {
    this.jump_event = this.handleJump.bind(this);
    window.addEventListener('keydown', this.jump_event);
  }

  handleJump(e) {
    if (e.code == 'Space') {
      this.speed = this.jumpStrength;
    }
  }

  destroy() {
    window.removeEventListener('keydown', this.jump_event);
  }

  getColliders() {
    return [
      new BoxCollider(
        this,
        this.x,
        this.y,
        CONSTS.BIRD_WIDTH,
        CONSTS.BIRD_HEIGHT
      ),
    ];
  }

  hit(hit_by) {
    if (hit_by == CONSTS.GROUND.NAME) {
      this.engine.stopGame();
    }

    this.is_dead = true;
    this.destroy();
  }

  update(deltaTime) {
    if (
      this.y + CONSTS.BIRD_HEIGHT <=
      CONSTS.FRAME_HEIGHT - CONSTS.GROUND.HEIGHT
    ) {
      this.speed += this.gravity;
      this.y += this.speed;
    }

    this.animateSprite(deltaTime);
    drawSprite(
      this.context2D,
      this.sprite,
      ...this.frames[this.current_frame],
      this.x,
      this.y,
      CONSTS.BIRD_WIDTH,
      CONSTS.BIRD_HEIGHT
    );
  }

  animateSprite(deltaTime) {
    if (this.is_dead) return;
    this.animationTimeCounter += deltaTime;
    if (this.animationTimeCounter > 100) {
      this.current_frame = (this.current_frame + 1) % this.frames.length;
      this.animationTimeCounter = 0;
    }
  }
}

export default Bird;
