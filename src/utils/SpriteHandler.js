export function loadSprite(url, callback) {
  const image = new Image();

  image.onload = () => {
    callback(image);
  };

  image.onerror = (error) => {
    callback(error, null);
  };

  image.src = url;
}

export function drawSprite(
  context2D,
  sprite,
  x,
  y,
  width,
  height,
  dx,
  dy,
  dw,
  dh
) {
  context2D.drawImage(sprite, x, y, width, height, dx, dy, dw, dh);
}
