import Collider from './collider';

class BoxCollider extends Collider {
  constructor(parent, x, y, width, height) {
    super(parent);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  intersects(collider_object) {
    return (
      this.x < collider_object.x + collider_object.width &&
      this.x + this.width > collider_object.x &&
      this.y < collider_object.y + collider_object.height &&
      this.y + this.height > collider_object.y
    );
  }
}

export default BoxCollider;
