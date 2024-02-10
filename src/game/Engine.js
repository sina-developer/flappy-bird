import Pool from './handler/Pool';
import Background from './objects/Background';
import Bird from './objects/Bird';
import Ground from './objects/Ground';
import Pipe from './objects/Pipe';

class Engine {
  constructor(context2D, sprite) {
    this.context2D = context2D;
    this.sprite = sprite;
    this.lastTimestamp = 0;
    this.animationId = null;
    this.objects = [
      new Background(this.context2D, this.sprite),
      new Pool(context2D, sprite, Pipe, 2),
      new Bird(this.context2D, this.sprite),
      new Ground(this.context2D, this.sprite),
    ];
  }

  animate = (timestamp) => {
    const deltaTime = timestamp - this.lastTimestamp;
    this.objects.forEach((object) => {
      object.update(deltaTime);
    });
    this.lastTimestamp = timestamp;
    this.animationId = requestAnimationFrame(this.animate);
  };

  startAnimation() {
    this.stopAnimation();
    this.objects.forEach((object) => {
      object.start();
    });
    this.animationId = requestAnimationFrame(this.animate);
  }

  stopAnimation() {
    cancelAnimationFrame(this.animationId);
  }
}

export default Engine;
