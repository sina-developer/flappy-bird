import React, { useEffect, useRef, useState } from 'react';
import { CONSTS } from '../consts/Consts';
import { useSprite } from '../contexts/SpriteContext';
import Engine from '../game/Engine';

function Canvas() {
  const { sprite, setSprite } = useSprite();
  const [context2D, setContext2D] = useState();

  const canvasRef = useRef();

  useEffect(() => {
    setSprite(CONSTS.SPRITE_PATH);
    setContext2D(canvasRef.current.getContext('2d'));
  }, []);

  useEffect(() => {
    let engine;
    if (context2D && sprite) {
      context2D.imageSmoothingEnabled = false;
      engine = new Engine(context2D, sprite);
      engine.startAnimation();
    }

    // return () => engine && engine.stopAnimation();
  }, [sprite, context2D]);

  return (
    <canvas
      ref={canvasRef}
      height={CONSTS.FRAME_HEIGHT}
      width={CONSTS.FRAME_WIDTH}
    />
  );
}

export default Canvas;
