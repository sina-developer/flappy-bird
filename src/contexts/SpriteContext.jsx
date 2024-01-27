import React, { createContext, useContext, useState } from 'react';
import { loadSprite } from '../utils/SpriteHandler';

// Create a context for the sprite
const SpriteContext = createContext();

// Create a provider component
const SpriteProvider = ({ children }) => {
  const [sprite, setSprite] = useState(null);

  // Function to set the sprite
  const setSpriteImage = (spriteImage) => {
    loadSprite(spriteImage, setSprite);
  };

  return (
    <SpriteContext.Provider value={{ sprite, setSprite: setSpriteImage }}>
      {children}
    </SpriteContext.Provider>
  );
};

// Custom hook to use the sprite context
const useSprite = () => {
  const context = useContext(SpriteContext);
  if (!context) {
    throw new Error('useSpriteContext must be used within a SpriteProvider');
  }
  return context;
};

export { SpriteProvider, useSprite };
