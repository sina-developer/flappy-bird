import { CONSTS } from '../../consts/Consts';

class Pool {
  constructor(context2D, sprite, ref, count_on_screen) {
    this.context2D = context2D;
    this.sprite = sprite;
    this.ref = ref;
    this.count = count_on_screen + 1;

    this.stack = [];

    this.gap = CONSTS.FRAME_WIDTH / (this.count - 1);
    this.startOffset = CONSTS.FRAME_WIDTH;
  }

  start() {
    for (let i = 0; i < this.count; i++) {
      this.stack[i] = new this.ref(this.context2D, this.sprite);
      this.stack[i].start(this.startOffset + this.gap * i);
    }
  }

  update(deltaTime) {
    for (let i = 0; i < this.count; i++) {
      const item = this.stack[i];
      if (item.x <= -CONSTS.PIPES.UP.WIDTH) {
        item.start(CONSTS.FRAME_WIDTH + this.gap / 2);
      }
      item.update(deltaTime);
    }
  }
}

export default Pool;
