class Collider {
  constructor(parent) {
    this.parent = parent;
  }

  intersects(collider_object) {}

  getParent() {
    return this.parent;
  }
}

export default Collider;
