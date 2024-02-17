class ObjectModel {
  constructor(context2D, sprite) {
    this.context2D = context2D;
    this.sprite = sprite;
  }

  start() {}

  getColliders() {
    return [];
  }

  hit() {}

  destroy(){
    
  }

  update(deltaTime) {}
}

export default ObjectModel;
