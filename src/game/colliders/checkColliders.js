export default function checkColliders(objects, target) {
  let colliders = [];
  const types = {};

  objects.forEach((object) => {
    let _colliders = object.getColliders();
    if (!_colliders.length) return;

    if (target == object.constructor.name) {
      types[object.constructor.name]
        ? types[object.constructor.name].push(object)
        : (types[object.constructor.name] = [object]);
    } else {
      colliders = [...colliders, ..._colliders];
    }
  });

  let target_objects = types[target];
  target_objects.forEach((target_object) => {
    const target_colliders = target_object.getColliders();
    target_colliders.forEach((object_collider) => {
      colliders.forEach((collider) => {
        if (collider.intersects(object_collider)) {
          target_object.hit();
        }
      });
    });
  });
}
