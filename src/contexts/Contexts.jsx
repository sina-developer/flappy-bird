import React from 'react';
import { SpriteProvider } from './SpriteContext';

function Contexts({ children }) {
  return <SpriteProvider>{children}</SpriteProvider>;
}

export default Contexts;
