import checkColliders from './colliders/checkColliders';
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
    this.stopped = false;
    this.objects = [
      new Background(this, this.context2D, this.sprite),
      new Pool(this, context2D, sprite, Pipe, 2),
      new Ground(this, this.context2D, this.sprite),
      new Bird(this, this.context2D, this.sprite),
    ];
  }

  stopGame = () => {
    this.stopped = true;
  };

  animate = (timestamp) => {
    if (this.stopped) return;
    const deltaTime = timestamp - this.lastTimestamp;
    this.objects.forEach((object) => {
      object.update(deltaTime);
    });
    checkColliders(this.objects, 'Bird');
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
